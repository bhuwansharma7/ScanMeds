import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="app">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="logo">
        <span class="logo-icon">💊</span>
        <span>ScanMeds</span>
      </div>

      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#identify">Identify</a>
        <a href="#medicines">My Medicines</a>
        <a href="#technology">Technology</a>
      </div>
    </nav>


    <!-- HERO -->
  <!-- ============================= -->
<!-- HOME / HERO SECTION -->
<!-- ============================= -->

<section class="hero" id="home">

    <div class="hero-content">

        <div class="hero-text">

            <div class="badge">
                🧠 AI-POWERED MEDICINE ANALYSIS
            </div>

            <h1>
                Vision Transformer-Based
                <span>Pill Identification</span>
                & Drug Interaction Warning
            </h1>

            <p class="hero-description">
                ScanMeds uses a Vision Transformer (ViT) to analyze
                medicine images, identify pills, retrieve medicine
                information, and check selected medicines against
                a prototype interaction database.
            </p>

            <div class="hero-buttons">

                <button
                    class="primary-btn"
                    onclick="scrollToIdentify()"
                >
                    💊 Identify Medicine
                </button>

                <button
                    class="secondary-btn"
                    onclick="document.getElementById('medicines').scrollIntoView({ behavior: 'smooth' })"
                >
                    ⚠️ Check Interactions
                </button>

            </div>

            <div class="hero-note">
                <span>✓</span>
                Vision Transformer powered analysis
            </div>

        </div>


        <!-- HERO VISUAL -->

        <div class="hero-card">

            <div class="hero-card-header">
                <div class="scan-icon">💊</div>

                <div>
                    <h3>ScanMeds AI</h3>
                    <p>Medicine Analysis System</p>
                </div>
            </div>


            <div class="analysis-flow">

                <div class="flow-step">
                    <div class="flow-icon">📷</div>

                    <div>
                        <strong>Medicine Image</strong>
                        <span>Upload pill photo</span>
                    </div>
                </div>


                <div class="flow-arrow">
                    ↓
                </div>


                <div class="flow-step active">
                    <div class="flow-icon">🧠</div>

                    <div>
                        <strong>Vision Transformer</strong>
                        <span>AI image analysis</span>
                    </div>
                </div>


                <div class="flow-arrow">
                    ↓
                </div>


                <div class="flow-step">
                    <div class="flow-icon">💊</div>

                    <div>
                        <strong>Medicine Information</strong>
                        <span>Composition & uses</span>
                    </div>
                </div>


                <div class="flow-arrow">
                    ↓
                </div>


                <div class="flow-step warning-step">
                    <div class="flow-icon">⚠️</div>

                    <div>
                        <strong>Interaction Check</strong>
                        <span>Prototype warning system</span>
                    </div>
                </div>

            </div>

        </div>

    </div>


    <!-- FEATURE CARDS -->

    <div class="hero-features">

        <div class="feature-card">
            <div class="feature-icon">🧠</div>

            <div>
                <h3>Vision Transformer</h3>
                <p>
                    Image-based medicine analysis using a
                    transformer-based computer vision model.
                </p>
            </div>
        </div>


        <div class="feature-card">
            <div class="feature-icon">💊</div>

            <div>
                <h3>Medicine Information</h3>
                <p>
                    View composition, category, description,
                    and common uses from the prototype database.
                </p>
            </div>
        </div>


        <div class="feature-card">
            <div class="feature-icon">⚠️</div>

            <div>
                <h3>Interaction Warning</h3>
                <p>
                    Compare selected medicines against
                    documented prototype interaction rules.
                </p>
            </div>
        </div>

    </div>

</section>


    <!-- IDENTIFICATION -->
    <section class="section" id="identify">

      <div class="section-heading">

        <span>01 — AI IDENTIFICATION</span>

        <h2>Identify Your Medicine</h2>

        <p>
          Upload a clear image of a pill or tablet
          and let the Vision Transformer analyze it.
        </p>

      </div>


      <div class="upload-container">

        <!-- UPLOAD BOX -->

        <div
          class="upload-box"
          id="uploadBox"
        >

          <div class="upload-icon">
            📷
          </div>

          <h3>
            Upload Pill Image
          </h3>

          <p>
            Choose an image of the medicine
          </p>

          <label class="upload-btn">

            Choose Image

            <input
              type="file"
              id="imageInput"
              accept="image/*"
              hidden
            />

          </label>

        </div>


        <!-- PREVIEW -->

        <div
          class="preview-box"
          id="previewBox"
        >

          <img
            id="previewImage"
            alt="Selected pill"
          >

          <button
            class="primary-btn"
            id="identifyBtn"
          >
            🧠 Identify with ViT
          </button>

        </div>

      </div>


      <!-- AI RESULT -->

      <div id="result"></div>

    </section>


    <!-- MEDICINES -->
    <section
      class="section light-section"
      id="medicines"
    >

      <div class="section-heading">

        <span>02 — MEDICINE MANAGEMENT</span>

        <h2>My Medicines</h2>

        <p>
          Keep track of medicines selected for
          interaction analysis.
        </p>

      </div>


      <div
        id="medicineList"
        class="medicine-list"
      >

        <div class="empty-state">

          💊

          <p>
            No medicines added yet.
          </p>

        </div>

      </div>


      <button
        class="secondary-btn"
        id="checkInteractions"
      >
        ⚠ Check Drug Interactions
      </button>


      <div id="interactionResult"></div>

    </section>


    <!-- TECHNOLOGY -->
    <section
      class="section"
      id="technology"
    >

      <div class="section-heading">

        <span>03 — TECHNOLOGY</span>

        <h2>How ScanMeds Works</h2>

        <p>
          The system combines computer vision,
          Vision Transformers and medicine information.
        </p>

      </div>


      <div class="technology-grid">

        <div class="tech-card">

          <div class="number">
            01
          </div>

          <h3>
            Image Input
          </h3>

          <p>
            The user uploads an image of a pill
            or tablet.
          </p>

        </div>


        <div class="tech-card">

          <div class="number">
            02
          </div>

          <h3>
            Vision Transformer
          </h3>

          <p>
            ViT analyzes visual features from
            the medicine image.
          </p>

        </div>


        <div class="tech-card">

          <div class="number">
            03
          </div>

          <h3>
            Classification
          </h3>

          <p>
            The model generates the most likely
            medicine classifications.
          </p>

        </div>


        <div class="tech-card">

          <div class="number">
            04
          </div>

          <h3>
            Interaction Analysis
          </h3>

          <p>
            Multiple medicines can be checked
            for potential interactions.
          </p>

        </div>

      </div>


      <!-- VIT PIPELINE -->

      <div class="vit-section">

        <h2>
          Vision Transformer Pipeline
        </h2>

        <div class="pipeline">

          <div class="pipeline-item">
            <strong>Image</strong>
            <span>📷</span>
          </div>

          <div class="arrow">→</div>

          <div class="pipeline-item">
            <strong>Patch Embedding</strong>
            <span>▦</span>
          </div>

          <div class="arrow">→</div>

          <div class="pipeline-item">
            <strong>Transformer</strong>
            <span>🧠</span>
          </div>

          <div class="arrow">→</div>

          <div class="pipeline-item">
            <strong>Classification</strong>
            <span>💊</span>
          </div>

        </div>

      </div>

    </section>


    <!-- FOOTER -->

    <footer>

      <div class="footer-logo">
        💊 ScanMeds
      </div>

      <p>
        ViT-Based Pill Identification and Drug
        Interaction Warning System
      </p>

      <div class="disclaimer">
        ⚠ Educational and research prototype only.
        This system does not replace professional
        medical advice.
      </div>

    </footer>

  </div>
`;


window.scrollToIdentify = function () {

  document
    .getElementById('identify')
    .scrollIntoView({
      behavior: 'smooth'
    });

};


// ==========================================
// PILL IMAGE UPLOAD
// ==========================================

const imageInput = document.getElementById('imageInput');
const uploadBox = document.getElementById('uploadBox');
const previewBox = document.getElementById('previewBox');
const previewImage = document.getElementById('previewImage');

let selectedImage = null;


// When user selects an image
imageInput.addEventListener('change', function (event) {

  const file = event.target.files[0];

  // No file selected
  if (!file) {
    return;
  }

  // Make sure it is actually an image
  if (!file.type.startsWith('image/')) {

    alert('Please select an image file.');

    return;
  }

  selectedImage = file;

  // Create temporary URL for the selected image
  const imageURL = URL.createObjectURL(file);

  // Display image
  previewImage.src = imageURL;

  // Hide upload box
  uploadBox.style.display = 'none';

  // Show preview box
  previewBox.style.display = 'flex';

});

// ==========================================
// REAL ViT BACKEND CONNECTION
// ==========================================

async function identifyMedicineWithViT(imageFile) {

    const formData = new FormData();

    formData.append("file", imageFile);

    const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("ViT backend request failed");
    }

    return await response.json();
}


// ==========================================
// VI T BUTTON
// ==========================================

const identifyBtn = document.getElementById("identifyBtn");

if (identifyBtn) {

    identifyBtn.addEventListener("click", async () => {

        if (!selectedImage) {

            alert("Please select a medicine image first.");

            return;
        }

        identifyBtn.disabled = true;

        identifyBtn.textContent =
            "🧠 Analyzing with ViT...";

        try {

            const result =
                await identifyMedicineWithViT(selectedImage);

            console.log(
                "REAL ViT RESULT:",
                result
            );

            displayViTResult(result);

        } catch (error) {

            console.error(error);

            alert(
                "Could not connect to the ViT server.\n\n" +
                "Make sure the Python backend is running."
            );

        } finally {

            identifyBtn.disabled = false;

            identifyBtn.textContent =
                "🧠 Identify with ViT";
        }
    });
}


// ==========================================
// DISPLAY VI T RESULT
// ==========================================

function displayViTResult(result) {
    let resultBox = document.getElementById("vitResult");

    if (!resultBox) {
        resultBox = document.createElement("div");
        resultBox.id = "vitResult";

        const identifySection = document.querySelector("#identify");

        if (identifySection) {
            identifySection.appendChild(resultBox);
        }
    }

    const medicine = result?.identified_medicine;

    // Do not guess if OCR could not match a medicine.
    if (!result?.success || !medicine || !medicine.key) {
        resultBox.innerHTML = `
            <div class="vit-result-card">
                <div class="vit-result-header">
                    <h2>🔎 Medicine Not Identified</h2>
                    <p>
                        ScanMeds could not match the printed medicine
                        name to its prototype database.
                    </p>
                </div>

                <div class="medicine-description">
                    <p>
                        Please upload a clearer image showing the
                        medicine name on the packaging.
                    </p>
                </div>

                <p class="interaction-disclaimer">
                    No medicine name has been guessed or confirmed.
                </p>
            </div>
        `;

        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }

    // Show the automatically matched medicine name.
    resultBox.innerHTML = `
        <div class="vit-result-card">
            <div class="vit-result-header">
                <div class="vit-icon">🧠</div>
                <div>
                    <h2>ViT + OCR Analysis Complete</h2>
                    <p>
                        Visual analysis and printed-text recognition
                        have been completed.
                    </p>
                </div>
            </div>

            <div class="model-badge">
                ✓ Vision Transformer + OCR
            </div>

            <div class="medicine-title" style="margin-top: 24px;">
                <span style="font-size: 36px;">💊</span>
                <div>
                    <span class="medicine-prototype-badge">
                        MEDICINE MATCHED
                    </span>
                    <h2>${medicine.name}</h2>
                    <p>${medicine.generic_name}</p>
                </div>
            </div>

            <div class="medicine-grid">
                <div class="medicine-detail">
                    <span>Category</span>
                    <strong>${medicine.category}</strong>
                </div>

                <div class="medicine-detail">
                    <span>Composition</span>
                    <strong>${medicine.composition}</strong>
                </div>
            </div>

            <div id="medicineInfo"></div>

            <p class="interaction-disclaimer">
                ⚠️ Academic prototype only. OCR matching does not
                guarantee correct medicine identification. Verify
                the packaging and medicine name with a pharmacist
                before relying on medication information.
            </p>
        </div>
    `;

    // Display full information using the matched database entry.
    if (
        typeof showMedicineInformation === "function" &&
        medicineDatabase[medicine.key]
    ) {
        showMedicineInformation(medicine.key);
    }

    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// ==========================================
// MEDICINE DATABASE
// ==========================================

const medicineDatabase = {

    paracetamol: {

        name: "Paracetamol",

        generic:
            "Paracetamol / Acetaminophen",

        category:
            "Analgesic / Antipyretic",

        composition:
            "Paracetamol",

        uses: [
            "Relief of mild to moderate pain",
            "Reduction of fever"
        ],

        description:
            "Paracetamol is commonly used to reduce fever and relieve mild to moderate pain."
    },


    ibuprofen: {

        name: "Ibuprofen",

        generic:
            "Ibuprofen",

        category:
            "NSAID",

        composition:
            "Ibuprofen",

        uses: [
            "Pain relief",
            "Reduction of inflammation",
            "Reduction of fever"
        ],

        description:
            "Ibuprofen is a non-steroidal anti-inflammatory medicine commonly used for pain, inflammation and fever."
    },


    cetirizine: {

        name: "Cetirizine",

        generic:
            "Cetirizine Hydrochloride",

        category:
            "Antihistamine",

        composition:
            "Cetirizine Hydrochloride",

        uses: [
            "Allergy symptoms",
            "Sneezing",
            "Runny nose",
            "Itching"
        ],

        description:
            "Cetirizine is an antihistamine commonly used to relieve allergy symptoms."
    },


    amoxicillin: {

        name: "Amoxicillin",

        generic:
            "Amoxicillin",

        category:
            "Antibiotic",

        composition:
            "Amoxicillin",

        uses: [
            "Treatment of certain bacterial infections"
        ],

        description:
            "Amoxicillin is a penicillin-type antibiotic used for certain bacterial infections."
    },


    azithromycin: {

        name: "Azithromycin",

        generic:
            "Azithromycin",

        category:
            "Macrolide Antibiotic",

        composition:
            "Azithromycin",

        uses: [
            "Treatment of certain bacterial infections"
        ],

        description:
            "Azithromycin is a macrolide antibiotic used for certain bacterial infections."
    },


    aspirin: {

        name: "Aspirin",

        generic:
            "Acetylsalicylic Acid",

        category:
            "NSAID / Antiplatelet",

        composition:
            "Acetylsalicylic Acid",

        uses: [
            "Pain relief",
            "Fever reduction",
            "Certain cardiovascular uses under medical supervision"
        ],

        description:
            "Aspirin has pain-relieving and antiplatelet properties."
    },


    metformin: {

        name: "Metformin",

        generic:
            "Metformin",

        category:
            "Antidiabetic",

        composition:
            "Metformin",

        uses: [
            "Management of type 2 diabetes"
        ],

        description:
            "Metformin is an oral medicine commonly used in the management of type 2 diabetes."
    },


    omeprazole: {

        name: "Omeprazole",

        generic:
            "Omeprazole",

        category:
            "Proton Pump Inhibitor",

        composition:
            "Omeprazole",

        uses: [
            "Reduction of stomach acid",
            "Acid reflux and related conditions"
        ],

        description:
            "Omeprazole reduces the production of stomach acid."
    }

};
// ==========================================
// MEDICINE CONFIRMATION
// ==========================================

function setupMedicineConfirmation() {

    const selector =
        document.getElementById(
            "medicineSelector"
        );

    const button =
        document.getElementById(
            "confirmMedicineBtn"
        );


    if (!selector || !button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const medicine =
                selector.value;


            if (!medicine) {

                alert(
                    "Please select a medicine."
                );

                return;
            }


            showMedicineInformation(
                medicine
            );
        }
    );
}

// ==========================================
// DISPLAY MEDICINE INFORMATION
// ==========================================
function showMedicineInformation(medicineKey) {
    const medicine = medicineDatabase[medicineKey];

    if (!medicine) {
        return;
    }

    const info = document.getElementById("medicineInfo");

    if (!info) {
        return;
    }

    /*
     * Prototype safety information.
     * This is educational/demo content, not a complete medication database.
     */
    const safetyInfo = {
        paracetamol: {
            sideEffects: [
                "Usually uncommon when used correctly",
                "Nausea or stomach discomfort may occur",
                "Serious liver injury can occur with excessive use"
            ],
            interactions: [
                "Check other medicines for duplicate paracetamol / acetaminophen",
                "Warfarin and some other medicines may require professional review",
                "Always check the medicine label and current medication list"
            ]
        },

        ibuprofen: {
            sideEffects: [
                "Indigestion or stomach discomfort",
                "Nausea or dizziness may occur",
                "Rarely, stomach ulcers, bleeding or kidney problems can occur"
            ],
            interactions: [
                "Do not combine with other NSAIDs such as aspirin unless advised",
                "Some blood thinners, steroids and other medicines may interact",
                "Check with a pharmacist or doctor if unsure"
            ]
        },

        cetirizine: {
            sideEffects: [
                "Sleepiness or tiredness",
                "Headache or dry mouth",
                "Dizziness or nausea may occur"
            ],
            interactions: [
                "Other medicines that cause drowsiness may increase side effects",
                "Alcohol may increase sleepiness",
                "Check with a pharmacist before combining with other medicines"
            ]
        },

        amoxicillin: {
            sideEffects: [
                "Nausea or diarrhoea may occur",
                "Skin rash can occur",
                "Allergic reactions can rarely be serious"
            ],
            interactions: [
                "Tell your doctor or pharmacist about all medicines you take",
                "Some medicines may require interaction checking before use together"
            ]
        },

        azithromycin: {
            sideEffects: [
                "Nausea or diarrhoea may occur",
                "Stomach discomfort",
                "Headache or dizziness may occur"
            ],
            interactions: [
                "Some medicines can interact with azithromycin",
                "Tell your healthcare professional about all medicines and supplements you take"
            ]
        },

        aspirin: {
            sideEffects: [
                "Indigestion or stomach discomfort",
                "Bleeding or bruising more easily",
                "Rarely, stomach ulcers or serious bleeding can occur"
            ],
            interactions: [
                "Other NSAIDs such as ibuprofen may increase side-effect concerns",
                "Blood thinners and some other medicines may interact",
                "Professional review may be needed for some combinations"
            ]
        },

        metformin: {
            sideEffects: [
                "Nausea or stomach discomfort",
                "Diarrhoea may occur",
                "Other effects can depend on the person's medical condition"
            ],
            interactions: [
                "Tell your doctor or pharmacist about all medicines you take",
                "Some medicines can affect blood glucose control or metformin safety"
            ]
        },

        omeprazole: {
            sideEffects: [
                "Headache",
                "Stomach discomfort or nausea",
                "Diarrhoea or constipation may occur"
            ],
            interactions: [
                "Omeprazole can interact with some prescription medicines",
                "Tell your doctor or pharmacist about all medicines and supplements"
            ]
        }
    };

    const safety = safetyInfo[medicineKey] || {
        sideEffects: [
            "Refer to the medicine's official leaflet for complete information"
        ],
        interactions: [
            "Interaction information is not complete in this prototype",
            "Consult a pharmacist or doctor before combining medicines"
        ]
    };

    info.innerHTML = `
        <div
            class="medicine-info-card"
            style="
                margin-top: 24px;
                background: linear-gradient(145deg, #ffffff 0%, #f3fbf7 100%);
                border: 1px solid #d5eee2;
                border-radius: 24px;
                padding: 30px;
                box-shadow: 0 14px 40px rgba(20, 100, 70, 0.10);
                overflow: hidden;
            "
        >

            <!-- HEADER -->
            <div
                style="
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid #dcefe6;
                "
            >
                <div
                    style="
                        width: 64px;
                        height: 64px;
                        min-width: 64px;
                        border-radius: 18px;
                        background: linear-gradient(135deg, #0f9f6e, #087f5b);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 30px;
                        box-shadow: 0 8px 20px rgba(15, 159, 110, 0.22);
                    "
                >
                    💊
                </div>

                <div>
                    <div
                        style="
                            color: #16845f;
                            font-size: 12px;
                            font-weight: 800;
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                            margin-bottom: 5px;
                        "
                    >
                        Medicine Identified
                    </div>

                    <h2
                        style="
                            margin: 0;
                            color: #12352b;
                            font-size: 30px;
                            font-weight: 800;
                        "
                    >
                        ${medicine.name}
                    </h2>

                    <p
                        style="
                            margin: 6px 0 0;
                            color: #58736a;
                            font-size: 15px;
                        "
                    >
                        ${medicine.generic}
                    </p>
                </div>
            </div>

            <!-- QUICK DETAILS -->
            <div
                style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
                    gap: 14px;
                    margin-top: 22px;
                "
            >

                <div
                    style="
                        background: #ffffff;
                        border: 1px solid #e1eee8;
                        border-radius: 16px;
                        padding: 17px;
                    "
                >
                    <div style="font-size: 12px; color: #6c8179; margin-bottom: 7px;">
                        CATEGORY
                    </div>

                    <strong style="color: #173f32; font-size: 15px;">
                        ${medicine.category}
                    </strong>
                </div>

                <div
                    style="
                        background: #ffffff;
                        border: 1px solid #e1eee8;
                        border-radius: 16px;
                        padding: 17px;
                    "
                >
                    <div style="font-size: 12px; color: #6c8179; margin-bottom: 7px;">
                        ACTIVE INGREDIENT
                    </div>

                    <strong style="color: #173f32; font-size: 15px;">
                        ${medicine.generic}
                    </strong>
                </div>

                <div
                    style="
                        background: #ffffff;
                        border: 1px solid #e1eee8;
                        border-radius: 16px;
                        padding: 17px;
                    "
                >
                    <div style="font-size: 12px; color: #6c8179; margin-bottom: 7px;">
                        COMPOSITION
                    </div>

                    <strong style="color: #173f32; font-size: 15px;">
                        ${medicine.composition}
                    </strong>
                </div>

            </div>

            <!-- DESCRIPTION -->
            <div
                style="
                    margin-top: 22px;
                    background: #eef9f4;
                    border-left: 4px solid #16a36f;
                    border-radius: 14px;
                    padding: 18px 20px;
                "
            >
                <div
                    style="
                        color: #147a59;
                        font-weight: 800;
                        font-size: 14px;
                        margin-bottom: 7px;
                    "
                >
                    ABOUT THIS MEDICINE
                </div>

                <p
                    style="
                        margin: 0;
                        color: #49645a;
                        line-height: 1.7;
                        font-size: 14px;
                    "
                >
                    ${medicine.description}
                </p>
            </div>

            <!-- USES + SIDE EFFECTS -->
            <div
                style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 18px;
                    margin-top: 20px;
                "
            >

                <!-- USES -->
                <div
                    style="
                        background: #ffffff;
                        border: 1px solid #dceee6;
                        border-radius: 18px;
                        padding: 22px;
                    "
                >
                    <div
                        style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            margin-bottom: 15px;
                        "
                    >
                        <span style="font-size: 22px;">🎯</span>

                        <h3
                            style="
                                margin: 0;
                                color: #173f32;
                                font-size: 18px;
                            "
                        >
                            Common Uses
                        </h3>
                    </div>

                    <ul
                        style="
                            margin: 0;
                            padding-left: 20px;
                            color: #536b62;
                            line-height: 1.8;
                        "
                    >
                        ${medicine.uses
                            .map(use => `<li>${use}</li>`)
                            .join("")}
                    </ul>
                </div>

                <!-- SIDE EFFECTS -->
                <div
                    style="
                        background: #ffffff;
                        border: 1px solid #f0e3cf;
                        border-radius: 18px;
                        padding: 22px;
                    "
                >
                    <div
                        style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            margin-bottom: 15px;
                        "
                    >
                        <span style="font-size: 22px;">⚠️</span>

                        <h3
                            style="
                                margin: 0;
                                color: #4b3820;
                                font-size: 18px;
                            "
                        >
                            Common Side Effects
                        </h3>
                    </div>

                    <ul
                        style="
                            margin: 0;
                            padding-left: 20px;
                            color: #685944;
                            line-height: 1.8;
                        "
                    >
                        ${safety.sideEffects
                            .map(effect => `<li>${effect}</li>`)
                            .join("")}
                    </ul>
                </div>

            </div>

            <!-- INTERACTIONS -->
            <div
                style="
                    margin-top: 20px;
                    background: #fff8ec;
                    border: 1px solid #f2dfbd;
                    border-radius: 18px;
                    padding: 22px;
                "
            >
                <div
                    style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 14px;
                    "
                >
                    <span style="font-size: 23px;">🔄</span>

                    <div>
                        <h3
                            style="
                                margin: 0;
                                color: #5a401d;
                                font-size: 18px;
                            "
                        >
                            Important Interactions & Cautions
                        </h3>

                        <p
                            style="
                                margin: 4px 0 0;
                                color: #846b48;
                                font-size: 13px;
                            "
                        >
                            Combinations that may require professional review
                        </p>
                    </div>
                </div>

                <ul
                    style="
                        margin: 0;
                        padding-left: 22px;
                        color: #685944;
                        line-height: 1.8;
                    "
                >
                    ${safety.interactions
                        .map(item => `<li>${item}</li>`)
                        .join("")}
                </ul>
            </div>

            <!-- DATABASE BADGE -->
            <div
                style="
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-top: 20px;
                    color: #33725c;
                    font-size: 13px;
                    font-weight: 600;
                "
            >
                <span>✓</span>
                <span>Information retrieved from the ScanMeds prototype medicine database</span>
            </div>

            <!-- ADD TO INTERACTION CHECK -->
            <button
                class="primary-btn"
                id="addMedicineBtn"
                style="
                    width: 100%;
                    margin-top: 20px;
                    padding: 15px 20px;
                    border: none;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #109f6d, #087b58);
                    color: white;
                    font-size: 15px;
                    font-weight: 800;
                    cursor: pointer;
                    box-shadow: 0 8px 20px rgba(15, 159, 110, 0.20);
                "
            >
                ➕ Add ${medicine.name} to Interaction Check
            </button>

            <!-- DISCLAIMER -->
            <div
                style="
                    margin-top: 18px;
                    padding: 14px 16px;
                    background: #f5f7f6;
                    border: 1px solid #e2e8e5;
                    border-radius: 12px;
                    color: #66756f;
                    font-size: 12px;
                    line-height: 1.6;
                "
            >
                <strong style="color: #495952;">
                    ⚠️ ScanMeds Prototype Notice:
                </strong>
                This information is provided for academic demonstration purposes.
                It is not medical advice and does not replace a medicine leaflet,
                pharmacist, or doctor. Interaction information in this prototype
                is not exhaustive.
            </div>

        </div>
    `;

    /*
     * Reconnect the Add Medicine button after inserting the HTML.
     */
    const addMedicineBtn = document.getElementById("addMedicineBtn");

    if (addMedicineBtn) {
        addMedicineBtn.addEventListener("click", () => {
            addMedicineForInteraction(medicineKey);
        });
    }
}

// =========================================
// INTERACTION CHECKER
// =========================================

let selectedInteractionMedicines = [];

function addMedicineForInteraction(medicineKey) {

    const medicine = medicineDatabase[medicineKey];

    if (!medicine) {
        alert("Medicine information not found.");
        return;
    }

    // Prevent duplicate medicines
    if (selectedInteractionMedicines.includes(medicineKey)) {
        alert(`${medicine.name || medicineKey} is already added.`);
        return;
    }

    selectedInteractionMedicines.push(medicineKey);

    renderInteractionChecker();

    const interactionBox = document.getElementById("interactionChecker");

    if (interactionBox) {
        interactionBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function renderInteractionChecker() {

    let box = document.getElementById("interactionChecker");

    if (!box) {
        box = document.createElement("div");
        box.id = "interactionChecker";

        const identifySection = document.querySelector("#identify");

        if (identifySection) {
            identifySection.appendChild(box);
        }
    }

    let selectedHTML = "";

    selectedInteractionMedicines.forEach((key, index) => {

        const medicine = medicineDatabase[key];

        if (!medicine) return;

        selectedHTML += `
            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:12px;
                margin:8px 0;
                border:1px solid #ddd;
                border-radius:10px;
                background:#f8fafc;
            ">
                <div>
                    <strong>💊 ${medicine.name || key}</strong>
                </div>

                <button
    class="removeInteractionBtn"
    data-index="${index}"
    style="
        border:none;
        background:#fee2e2;
        color:#b91c1c;
        padding:6px 10px;
        border-radius:6px;
        cursor:pointer;
    "
>
                    Remove
                </button>
            </div>
        `;
    });


    let medicineOptions = "";

    Object.entries(medicineDatabase).forEach(([key, medicine]) => {

        if (!selectedInteractionMedicines.includes(key)) {

            medicineOptions += `
                <option value="${key}">
                    ${medicine.name || key}
                </option>
            `;
        }
    });


    box.innerHTML = `
        <div class="medicine-info-card" style="
            margin-top:25px;
            padding:20px;
            border-radius:14px;
            border:1px solid #dbe3ef;
        ">

            <h2>💊 Drug Interaction Checker</h2>

            <p style="color:#64748b;">
                Select multiple medicines to check the prototype
                interaction database.
            </p>

            <h3>Selected Medicines</h3>

            <div>
                ${selectedHTML || "<p>No medicines selected.</p>"}
            </div>

            <div style="margin-top:18px;">

                <label>
                    <strong>Add another medicine:</strong>
                </label>

                <select
                    id="interactionMedicineSelect"
                    style="
                        width:100%;
                        padding:12px;
                        margin-top:8px;
                        border-radius:8px;
                        border:1px solid #cbd5e1;
                    "
                >
                    <option value="">-- Select Medicine --</option>
                    ${medicineOptions}
                </select>

                <button
    id="addSelectedMedicineBtn"
    class="primary-btn"
    style="margin-top:12px;"
>
    + Add Medicine
</button>

            </div>

            <button
    id="checkInteractionsBtn"
    class="primary-btn"
    style="margin-top:20px;"
>
    🔍 Check Drug Interactions
</button>

            <div id="interactionResults" style="margin-top:20px;"></div>

            <p style="
                margin-top:20px;
                font-size:13px;
                color:#b45309;
            ">
                ⚠️ Prototype only — not medical advice.
                Always verify medication combinations with a qualified
                pharmacist or doctor.
            </p>

        </div>
    `;
    // Connect Interaction Checker buttons
const addSelectedBtn = document.getElementById("addSelectedMedicineBtn");

if (addSelectedBtn) {
    addSelectedBtn.addEventListener("click", () => {
        addSelectedMedicineFromDropdown();
    });
    const interactionButton = document.getElementById("checkInteractions");

if (interactionButton) {
    interactionButton.addEventListener("click", checkMedicineInteractions);
}
}


// Handle interaction button even when the section is dynamically rendered
document.addEventListener("click", (event) => {
    const checkButton = event.target.closest("#checkInteractionsBtn");

    if (checkButton) {
        event.preventDefault();
        checkMedicineInteractions();
    }
});


document.querySelectorAll(".removeInteractionBtn").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.index);

        removeInteractionMedicine(index);

    });

});
}


function addSelectedMedicineFromDropdown() {

    const select = document.getElementById(
        "interactionMedicineSelect"
    );

    if (!select || !select.value) {
        alert("Please select a medicine first.");
        return;
    }

    addMedicineForInteraction(select.value);
}


function removeInteractionMedicine(index) {

    selectedInteractionMedicines.splice(index, 1);

    renderInteractionChecker();
}


async function checkMedicineInteractions() {
    const resultBox = document.getElementById("interactionResults");

    if (!resultBox) return;

    // At least two medicines are required
    if (selectedInteractionMedicines.length < 2) {
        resultBox.innerHTML = `
            <div class="interaction-empty-card">
                <div class="interaction-empty-icon">💊</div>
                <h3>Add at least two medicines</h3>
                <p>
                    Select two or more medicines before checking for
                    possible interactions.
                </p>
            </div>
        `;
        return;
    }

    // Show loading state
    resultBox.innerHTML = `
        <div class="interaction-loading-card">
            <div class="interaction-spinner"></div>
            <h3>Checking interactions...</h3>
            <p>ScanMeds is analyzing the selected medicines.</p>
        </div>
    `;

    try {
        // Send selected medicine IDs to FastAPI backend
        const response = await fetch("http://127.0.0.1:8000/interactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                medicines: selectedInteractionMedicines
            })
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();

        // Interaction found
        if (data.has_interactions && data.interactions_found.length > 0) {
            const interactionCards = data.interactions_found.map(interaction => `
                <div class="interaction-warning-card">
                    <div class="interaction-warning-icon">⚠️</div>

                    <div class="interaction-warning-content">
                        <div class="interaction-warning-title">
                            Interaction Warning
                        </div>

                        <p>
                            ${interaction.description || 
                              "A possible interaction was found between the selected medicines."}
                        </p>

                        <div class="interaction-medicines">
                            ${interaction.medicines
                                .map(medicine => {
                                    const info = medicineDatabase[medicine];
                                    return `
                                        <span class="interaction-medicine-tag">
                                            💊 ${info?.name || medicine}
                                        </span>
                                    `;
                                })
                                .join("")}
                        </div>

                        <p class="interaction-disclaimer">
                            <strong>Important:</strong>
                            This is a ScanMeds prototype result, not medical advice.
                            Verify medication combinations with a pharmacist or doctor.
                        </p>
                    </div>
                </div>
            `).join("");

            resultBox.innerHTML = `
                <div class="interaction-result-container has-warning">
                    <div class="interaction-result-header">
                        <div>
                            <span class="interaction-status-icon">⚠️</span>
                            <span>Potential Interaction Found</span>
                        </div>
                    </div>

                    ${interactionCards}
                </div>
            `;
        } 
        
        // No interaction rule found
        else {
            const medicineNames = data.medicines_checked.map(medicine => {
                const info = medicineDatabase[medicine];
                return info?.name || medicine;
            });

            resultBox.innerHTML = `
                <div class="interaction-result-container no-warning">
                    <div class="interaction-safe-icon">✓</div>

                    <h3>No Interaction Rule Found</h3>

                    <p>
                        No interaction rule was found for the selected
                        combination in the current ScanMeds prototype dataset.
                    </p>

                    <div class="checked-medicines">
                        ${medicineNames.map(name => `
                            <span class="interaction-medicine-tag">
                                💊 ${name}
                            </span>
                        `).join("")}
                    </div>

                    <p class="interaction-disclaimer">
                        <strong>Note:</strong>
                        A result of "no interaction rule found" does not mean
                        the combination is clinically risk-free. Always verify
                        medicines with a qualified healthcare professional.
                    </p>
                </div>
            `;
        }

    } catch (error) {
        console.error("Interaction check failed:", error);

        resultBox.innerHTML = `
            <div class="interaction-error-card">
                <div class="interaction-error-icon">❌</div>

                <h3>Unable to Check Interactions</h3>

                <p>
                    ScanMeds could not connect to the backend server.
                </p>

                <small>
                    Make sure the FastAPI backend is running on
                    <strong>http://127.0.0.1:8000</strong>.
                </small>
            </div>
        `;
    }
}

document.addEventListener("click", function (event) {
    const button = event.target.closest("#checkInteractions");

    if (button) {
        console.log("CHECK DRUG INTERACTIONS BUTTON CLICKED");
        checkMedicineInteractions();
    }
});