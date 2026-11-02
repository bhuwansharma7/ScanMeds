# 💊 ScanMeds – AI-Based Pill Identification & Drug Interaction Warning

**ScanMeds** is an AI-powered medicine identification prototype that uses Computer Vision and Optical Character Recognition (OCR) to help identify medicines and provide relevant medicine information.

The project uses a **Vision Transformer (ViT)** model for image-based pill identification and OCR technology for extracting text from medicine packaging.

## 🎯 Problem Statement

Identifying medicines correctly can be difficult when packaging information is unclear or when pills look similar. Incorrect medicine identification can create confusion and potential medication risks.

ScanMeds aims to simplify medicine identification through AI-powered image processing and text recognition.

## 🚀 Key Features

- **Pill Identification:** Uses a Vision Transformer (ViT) model to identify pills from images.
- **OCR Technology:** Extracts text from medicine packaging and labels.
- **Medicine Information:** Provides relevant medicine details, uses and side-effect information where available.
- **Drug Interaction Warning:** Designed to highlight potential interactions between medicines.
- **Web Interface:** Provides a user-friendly frontend for interacting with the system.
- **AI-Powered Backend:** Uses FastAPI to connect the frontend with the machine learning models.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend development |
| FastAPI | Backend API |
| Vision Transformer (ViT) | Pill image identification |
| Hugging Face Transformers | Pre-trained model integration |
| EasyOCR | Text recognition |
| PyTorch | Deep learning framework |
| NumPy | Numerical processing |
| Pillow (PIL) | Image processing |
| JavaScript | Frontend development |
| Vite | Frontend development server |

## 🏗️ Project Structure

```text
ScanMeds/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── main.js
│   │   └── style.css
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   ├── tsconfig.json
│   ├── .gitignore
│   └── README.md
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhuwansharma7/ScanMeds.git
cd ScanMeds
```

### 2. Backend Setup

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment on Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

Backend API documentation:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🔮 Future Scope

- Improve pill identification accuracy using larger datasets.
- Expand medicine database integration.
- Improve drug interaction checking using reliable medical databases.
- Add user authentication and medicine history.
- Develop a dedicated mobile application.
- Improve OCR accuracy for different medicine packaging formats.

## ⚠️ Disclaimer

ScanMeds is an academic project and an experimental medicine identification prototype. Its results should not be used as the sole basis for medical decisions. Always verify medicine information with a qualified healthcare professional.

## 👨‍💻 Project Information

**Project Name:** ScanMeds

**Domain:** Computer Vision and Image Analysis

**Core Technologies:** Vision Transformer (ViT), OCR, FastAPI and Python

**Repository:** [GitHub – ScanMeds](https://github.com/bhuwansharma7/ScanMeds)

---

*Developed as an academic project exploring AI-powered medicine identification and information retrieval.*
