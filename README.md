# Harvard CV Generator 2026 (Zero-Data Edition)

A minimalist resume generator designed according to the **Harvard 2026** recruitment standards, optimized for **ATS** (Applicant Tracking Systems).

## 🛡️ Privacy by Design (Zero-Data)

This project was built on a philosophy of **total privacy**:

- **No Database:** The data you enter only resides in your browser's memory (React State).

- **Local Processing:** PDF generation occurs strictly on the client side.

- **Self-Destruction:** When you close the tab or refresh the page, all information is permanently deleted. We do not track or store your personal information.

## 🎓 Harvard 2026 Standard

The design adheres to the strictest academic and professional guidelines:

- **Typography:** Exclusive use of standard Serif/Sans-Serif fonts (10pt - 12pt).

- **Structure:** Single column for maximum compatibility with ATS readers.

- **Content:** Focus on action verbs and quantifiable results.

## 🛠️ Technology Stack

- **Core:** React 18 + Vite
- **Language:** TypeScript (Strict typing for data integrity)
- **Styles:** Pure CSS (Precise handling of print rules)
- **PDF:** @react-pdf/renderer

## 🚀 Installation and Use

1. Clone the repository:
   ```bash
   git clone git@github.com:wasakabeofficial/creater_cv_format_harvard_ats.git
   ```

## 🏗️ Architecture

The project follows a **Feature-Based Architecture**, organized to maintain a strict separation between data logic and the Harvard visual standard:

- **Modular Design:** Each core functionality (Editor, Preview, PDF Generation) is isolated, making the code easier to maintain and test.
- **Unidirectional Data Flow:** Data flows from the `Editor` to the `App` state, and then to the `Preview`, ensuring that the "Zero-Data" policy is easy to manage from a single source of truth.
- **Clean Logic:** Utilities for date formatting and PDF styling are decoupled from the UI components to ensure the Harvard format remains consistent.

### 📂 Directory Structure

- `src/features/`: Contains the core logic for the CV Editor and the Harvard Preview.
- `src/types/`: Centralized TypeScript interfaces to ensure data integrity.
- `src/hooks/`: Custom hooks for managing the volatile state without persistence.
- `src/utils/`: Pure functions for PDF rendering and ATS-friendly formatting.
