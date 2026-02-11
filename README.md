# Garment Billing System

A simple and clean billing system built using HTML, CSS, and JavaScript.
This project allows shop owners to generate printable bills with automatic total calculation.

---

## 📌 Features

* Add unlimited items dynamically
* Auto calculation of item amount (Qty × Rate)
* Auto total calculation
* Delete item option
* Printable bill format
* Clean and professional layout

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

billing-system/
│
├── index.html   → Bill layout
├── style.css    → Styling
├── script.js    → Billing logic
└── README.md

---

## 🚀 How to Run This Project

1. Download or clone the repository.
2. Open the folder in VS Code.
3. Double click on **index.html**
   OR
   Right click → Open with Live Server.
4. Start adding items and generate bill.

---

## 🧠 How It Works

* "Add Item" button creates a new table row dynamically.

* When Quantity or Rate changes, JavaScript calculates:

  Amount = Quantity × Rate

* All row amounts are summed to calculate the Total.

* "Print Bill" button uses browser print functionality.

---

## ⚠️ Limitations

* No backend database.
* Data is not stored permanently.
* Bill number is manual.
* No GST calculation.
* No PDF export.

---

## 📈 Future Improvements

* Add PHP + MySQL backend
* Auto Bill Number generation
* Save bills in database
* Add GST calculation
* Export bill as PDF
* Add logo and branding

---

## 👨‍💻 Developed By

Shaikh Sufiyan
Full Stack Developer (Learner)

---
