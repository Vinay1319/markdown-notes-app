# Markdown Notes App

A full-stack Markdown Notes Application built using React, Node.js (Express), and SQLite.
Users can create, edit, delete, and preview notes with real-time Markdown rendering.


## Features

* Create, edit, delete notes
* Markdown editor with live preview
* Split-screen layout (Editor + Preview)
* Persistent storage using SQLite
* Dark mode support 
* Responsive design (mobile + desktop)

## Tech Stack

* Frontend: React.js
* Backend: Node.js (Express)
* Database: SQLite
* API: RESTful APIs


## Installation

### 1. Clone the repository

git clone https://github.com/Vinay1319/markdown-notes-app.git

cd markdown-notes-app


### 2. Setup Backend

cd backend

npm install

### 3. Setup Frontend

cd ../frontend

npm install


## Running the App

### Start Backend

cd backend
node app.js

Backend runs on: http://localhost:5000


### Start Frontend

cd frontend
npm start

Frontend runs on: http://localhost:3000


## Database Setup

* SQLite database is auto-created (`notes.db`)
* Table is created automatically on server start
* No manual migrations required


## ⚙️ Environment Variables

No environment variables required for this project.


## API Endpoints

* GET /notes → Fetch all notes
* POST /notes → Create note
* PUT /notes/:id → Update note
* DELETE /notes/:id → Delete note


## 🎥 Demo

(Add your demo video link here)


## Key Decisions

* Used SQLite for quick setup and zero configuration
* Used react-markdown for reliable Markdown rendering
* Focused on clean UI and usability over complex styling


## Trade-offs

* No authentication due to time constraints
* No version history implemented
* Auto-save not included to avoid API overuse


## Author

Pati Siva Satya Vinay