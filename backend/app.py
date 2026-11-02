from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from transformers import (
    AutoConfig,
    AutoModelForImageClassification,
    ViTImageProcessor,
    pipeline
)
import numpy as np
from PIL import Image
import io
import easyocr

app = FastAPI(
    title="ScanMeds API",
    description="ViT-based medicine identification prototype",
    version="1.0"
)

# Allow the Vite frontend to communicate with Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5176",
    "http://127.0.0.1:5176"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print("Loading Vision Transformer model...")

MODEL_ID = "pillIdentifierAI/pillIdentifier"

# Load the model configuration
config = AutoConfig.from_pretrained(MODEL_ID)

# Version 1 uses the standard ViT image preprocessing
processor = ViTImageProcessor.from_pretrained(
    "google/vit-base-patch16-224"
)

# Load the actual pill-identification ViT weights
model = AutoModelForImageClassification.from_pretrained(
    MODEL_ID,
    subfolder="version1",
    config=config
)

classifier = pipeline(
    "image-classification",
    model=model,
    image_processor=processor
)

print("ViT model loaded successfully!")
print("Loading OCR model...")

ocr_reader = easyocr.Reader(
    ["en"],
    gpu=False
)

print("OCR model loaded successfully!")

# -----------------------------
# Demo medicine database
# -----------------------------

MEDICINES = {
    "paracetamol": {
        "name": "Paracetamol",
        "generic_name": "Paracetamol / Acetaminophen",
        "category": "Analgesic / Antipyretic",
        "composition": "Paracetamol",
        "uses": [
            "Relief of mild to moderate pain",
            "Reduction of fever"
        ],
        "description": "Paracetamol is commonly used to reduce fever and relieve mild to moderate pain."
    },

    "ibuprofen": {
        "name": "Ibuprofen",
        "generic_name": "Ibuprofen",
        "category": "NSAID",
        "composition": "Ibuprofen",
        "uses": [
            "Pain relief",
            "Reduction of inflammation",
            "Reduction of fever"
        ],
        "description": "Ibuprofen is a non-steroidal anti-inflammatory medicine commonly used for pain, inflammation and fever."
    },

    "cetirizine": {
        "name": "Cetirizine",
        "generic_name": "Cetirizine Hydrochloride",
        "category": "Antihistamine",
        "composition": "Cetirizine Hydrochloride",
        "uses": [
            "Allergy symptoms",
            "Sneezing",
            "Runny nose",
            "Itching"
        ],
        "description": "Cetirizine is an antihistamine commonly used to relieve symptoms of allergies."
    },

    "amoxicillin": {
        "name": "Amoxicillin",
        "generic_name": "Amoxicillin",
        "category": "Antibiotic",
        "composition": "Amoxicillin",
        "uses": [
            "Treatment of certain bacterial infections"
        ],
        "description": "Amoxicillin is a penicillin-type antibiotic used for certain bacterial infections."
    },

    "azithromycin": {
        "name": "Azithromycin",
        "generic_name": "Azithromycin",
        "category": "Macrolide Antibiotic",
        "composition": "Azithromycin",
        "uses": [
            "Treatment of certain bacterial infections"
        ],
        "description": "Azithromycin is a macrolide antibiotic used for certain bacterial infections."
    },

    "aspirin": {
        "name": "Aspirin",
        "generic_name": "Acetylsalicylic Acid",
        "category": "NSAID / Antiplatelet",
        "composition": "Acetylsalicylic Acid",
        "uses": [
            "Pain relief",
            "Fever reduction",
            "Certain cardiovascular uses under medical supervision"
        ],
        "description": "Aspirin has pain-relieving and antiplatelet properties and is used for several medical purposes."
    },

    "metformin": {
        "name": "Metformin",
        "generic_name": "Metformin",
        "category": "Antidiabetic",
        "composition": "Metformin",
        "uses": [
            "Management of type 2 diabetes"
        ],
        "description": "Metformin is an oral medicine commonly used in the management of type 2 diabetes."
    },

    "omeprazole": {
        "name": "Omeprazole",
        "generic_name": "Omeprazole",
        "category": "Proton Pump Inhibitor",
        "composition": "Omeprazole",
        "uses": [
            "Reduction of stomach acid",
            "Acid reflux and related conditions"
        ],
        "description": "Omeprazole reduces the production of stomach acid."
    }
}

# -----------------------------
# OCR-based medicine identification
# -----------------------------

def identify_medicine_from_text(image):
    """
    Reads medicine text from the uploaded image
    and matches it against the ScanMeds medicine database.
    """

    ocr_results = ocr_reader.readtext(
    np.array(image),
    detail=1
)

    detected_text = []

    for result in ocr_results:
        text = result[1].strip()

        if text:
            detected_text.append(text)

    full_text = " ".join(detected_text).lower()

    # Match medicine names and generic names
    for medicine_key, medicine in MEDICINES.items():

        medicine_name = medicine["name"].lower()
        generic_name = medicine["generic_name"].lower()

        if medicine_name in full_text:
            return {
                "medicine_key": medicine_key,
                "medicine": medicine,
                "detected_text": detected_text
            }

        # Check the first part of generic name
        generic_parts = generic_name.split("/")

        for part in generic_parts:
            part = part.strip().lower()

            if part and part in full_text:
                return {
                    "medicine_key": medicine_key,
                    "medicine": medicine,
                    "detected_text": detected_text
                }

    return {
        "medicine_key": None,
        "medicine": None,
        "detected_text": detected_text
    }
# -----------------------------
# Prototype interaction dataset
# -----------------------------

INTERACTIONS = [
    {
        "medicines": ["aspirin", "ibuprofen"],
        "severity": "Important",
        "message": "Using aspirin and ibuprofen together may increase the risk of gastrointestinal irritation and bleeding."
    },
    {
        "medicines": ["aspirin", "amoxicillin"],
        "severity": "Review",
        "message": "This combination should be reviewed against the patient's complete medication and medical history."
    },
    {
        "medicines": ["ibuprofen", "metformin"],
        "severity": "Review",
        "message": "This combination may require additional consideration depending on kidney function and other patient factors."
    }
]


@app.get("/")
def root():
    return {
        "status": "online",
        "project": "ScanMeds",
        "model": "pillIdentifierAI/pillIdentifier",
        "architecture": "Vision Transformer"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "vit_model_loaded": True,
        "medicine_database_entries": len(MEDICINES)
    }


@app.get("/medicines")
def get_medicines():
    return MEDICINES


@app.post("/predict")
async def predict_medicine(file: UploadFile = File(...)):

    # Read uploaded image
    image_bytes = await file.read()

    # Convert to PIL image
    image = Image.open(
        io.BytesIO(image_bytes)
    ).convert("RGB")

    # ---------------------------------
    # 1. Run actual ViT model
    # ---------------------------------

    predictions = classifier(
        image,
        top_k=5
    )

    formatted_predictions = []

    for prediction in predictions:
        formatted_predictions.append({
            "label": prediction["label"],
            "score": round(
                float(prediction["score"]) * 100,
                2
            )
        })

    # ---------------------------------
    # 2. Run OCR
    # ---------------------------------

    ocr_result = identify_medicine_from_text(
        image
    )

    # ---------------------------------
    # 3. Return automatic identification
    # ---------------------------------

    if ocr_result["medicine"]:

        medicine = ocr_result["medicine"]

        return {
            "success": True,

            "model": "pillIdentifierAI/pillIdentifier",

            "architecture": "Vision Transformer (ViT) + OCR",

            "identified_medicine": {
                "key": ocr_result["medicine_key"],
                "name": medicine["name"],
                "generic_name": medicine["generic_name"],
                "category": medicine["category"],
                "composition": medicine["composition"],
                "uses": medicine["uses"],
                "description": medicine["description"]
            },

            "ocr_text": ocr_result["detected_text"],

            "predictions": formatted_predictions
        }

    # ---------------------------------
    # 4. If OCR cannot identify medicine
    # ---------------------------------

    return {
        "success": True,

        "model": "pillIdentifierAI/pillIdentifier",

        "architecture": "Vision Transformer (ViT) + OCR",

        "identified_medicine": None,

        "ocr_text": ocr_result["detected_text"],

        "predictions": formatted_predictions,

        "message": "Medicine name could not be confidently detected from the image. Please upload a clearer image."
    }


@app.post("/interactions")
async def check_interactions(data: dict):

    medicines = data.get("medicines", [])

    medicines = [
        medicine.lower().strip()
        for medicine in medicines
    ]

    found = []

    for interaction in INTERACTIONS:

        required = set(interaction["medicines"])

        if required.issubset(set(medicines)):
            found.append(interaction)

    return {
        "medicines_checked": medicines,
        "interactions_found": found,
        "has_interactions": len(found) > 0
    }