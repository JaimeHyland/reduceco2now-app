# Backend Reduce CO₂ NOW

A lightweight and editor‑friendly backend built to make content management fast, simple, and independent from the development team. This prototype is part of the **Reduce CO₂ NOW** initiative, focused on enabling non‑technical editors to update site content without needing to request changes from programmers.

---

## 📌 Overview

This backend is designed so that organization editors can easily:

- Add or update news articles  
- Modify header texts  
- Update navigation bar labels  

All of this can be done without touching the codebase, keeping the workflow smooth and accessible for non‑technical contributors.

Since this is still a **prototype**, the project uses **SQLite** instead of an external database engine. This keeps setup simple and portable during early development.

---

## 🚀 Getting Started

Follow these steps after cloning the repository:

### 1. Install dependencies
```bash
npm install

cp .env.example .env

```

 Make sure the values match your local setup.

### 3. Set up the SQLite database
You will need a copy of the current SQLite database used by the team.
Since this is a prototype, the database is not generated automatically.

👉 Contact the team through the Discord channel to obtain the correct .sqlite file.

Place it in the project directory exactly where the backend expects it.

### 4. Run the development server

```bash
npm run dev
```
If everything is configured correctly, the backend should start without issues.

---

### ⚠️ Common Issue: 403 Forbidden from the Frontend
If the frontend returns a 403 Forbidden error, it usually means:

The backend was launched without a valid SQLite database, or

The database was not initialized correctly.

Double‑check that your .sqlite file is present and accessible.

---

### 🤝 Contributing
Contributions are welcome. Since this is an early prototype, feedback and improvements are especially valuable.

Before contributing:

Ensure you have the correct SQLite database

Follow the setup steps above

Reach out on Discord if you need help or want to coordinate changes

📬 Contact
For database access, questions, or collaboration, join the organization’s Discord channel and reach out to the backend team.