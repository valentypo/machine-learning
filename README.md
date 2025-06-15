# Student Depression Prediction Web App

Kaggle Link : https://www.kaggle.com/code/valentypo/group-1-depression/edit/run/222554412

Backend Link : https://github.com/valentypo/depression-learning-backend 

(note: may only work up until 20th June 2025.)

Website Link : https://machine-learning-mocha.vercel.app/

This project is a full-stack web application that predicts student depression levels using a machine learning model. It features a **Next.js frontend** and a **Flask backend**, deployed using **Vercel** and **Railway** respectively.

## 🚀 Features

- 🧠 Machine Learning model for depression prediction
- 🌐 Frontend built with Next.js & Tailwind CSS
- 🐍 Backend API with Flask
- 📦 RESTful API connection between frontend and backend
- ☁️ Deployed on Vercel (frontend) and Railway (backend)

## 🧩 Tech Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- TypeScript

### Backend
- Flask
- Flask-CORS
- scikit-learn, pandas, joblib (for model serving)

### Deployment
- **Frontend:** Vercel
- **Backend:** Railway

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/valentypo/machine-learning.git
cd machine-learning
```

### 2. Setup Frontend (Next.js)
```bash
cd src
npm install
# create .env.local file and add:
# NEXT_PUBLIC_API_URL=[https://your-backend-url/api](http://depression-learning-backend-production.up.railway.app)
npm run dev
```

### 3. Setup Backend (Flask)
```bash
cd server
pip install -r requirements.txt
python app.py
```

> Make sure the backend runs on port 5000 or update the frontend's `.env.local` accordingly.

```

## 🌍 Deployment

- **Frontend deployed on Vercel:** https://machine-learning-mocha.vercel.app/
- **Backend deployed on Railway:** http://depression-learning-backend-production.up.railway.app

## ✨ Credits

Created by 
[@Cavinee & @valentypo]
