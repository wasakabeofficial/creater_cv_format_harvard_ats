# Harvard CV Generator 2026 (Zero-Data Edition)

A minimalist resume generator designed according to the **Harvard 2026** recruitment standards, optimized for **ATS** (Applicant Tracking Systems).

## 🛡️ Privacy by Design (Zero-Data)

This project was built on a philosophy of **total privacy**:

- **No Database:** The data you enter only resides in your browser's memory via **Zustand** (Volatile State).
- **Local Processing:** PDF generation occurs strictly on the client side using `@react-pdf/renderer`.
- **Session Wipe:** Includes a `securityUtils.wipeSessionData()` logic. When you reset the CV or refresh, all information is permanently deleted. We do not track, store, or see your personal information.

## 🎓 Harvard 2026 Standard

The design adheres to the strictest academic and professional guidelines:

- **Typography:** Exclusive use of standard Serif/Sans-Serif fonts (10pt - 12pt) for high-parsing accuracy.
- **Structure:** Single column for maximum compatibility with modern ATS readers.
- **Dynamic Skills:** Organized by professional categories (Programming, Tools, Soft Skills) as demanded by the 2026 market.
- **Naming Convention:** Automatic file generation with the format: `CV_FullName_2026.pdf`.

## 🛠️ Technology Stack

- **Core:** React 18 + Vite
- **State Management:** **Zustand** (Store-based architecture for clean data flow)
- **Language:** TypeScript (Strict typing with zero abbreviations)
- **Styles:** Tailwind CSS + CSS Variables (Precise handling of the Harvard visual identity)
- **PDF:** `@react-pdf/renderer` with internal metadata injection.

## 🏗️ Architecture

The project follows a **Feature-Based Architecture**, organized to maintain a strict separation between data logic and the Harvard visual standard:

- **Zustand Store:** Centralized `useCvStore` that manages the `CVData` object through explicit actions (`addExperience`, `updateSkill`, `setLanguages`).
- **Step-by-Step Editor:** A 4-step guided process (Personal Info -> Experience -> Education -> Skills & Languages).
- **Real-Time Synchronization:** A unidirectional flow where the `PreviewContainer` re-renders instantly as the user types in the `EditorContainer`.

### 📂 Directory Structure

```text
src/
├── components/
│   ├── ui/                 # Reusable atomic components (Button, Input, FormSection)
│   ├── editor/             # Step-based forms (PersonalInfo, Experience, Education, Skills)
│   └── preview/            # Harvard-standard live preview
├── store/
│   └── useCvStore.ts       # Global state with Zustand (Actions and initialData)
├── types/
│   └── cv.ts               # Strict interfaces (PersonalInfo, Experience, Skill, etc.)
├── lib/
│   └── security.ts         # Session wipe and data protection utilities
├── assets/
│   └── styles/             # Global CSS and Harvard color tokens

```

### 🧱 Interface Components (Design Library)

Following our strict rule of **explicit naming (no abbreviations)**:

- **`PersonalInfoForm`**: Manages contact data and professional summary.
- **`ExperienceForm`**: Dynamic list manager for professional background with bullet point support.
- **`EducationForm`**: Structured input for academic history, including GPA and field of study.
- **`SkillsForm`**: A categorical manager that allows grouping tools and technologies (e.g., "Languages", "Frameworks").
- **`Footer`**: A high-fidelity footer with 2026 compliance links (Harvard OCS, Solución Laboral Perú, Midudev Reference).

## 🚀 Installation and Use

1. Clone the repository:

```bash
git clone git@github.com:wasakabeofficial/creater_cv_format_harvard_ats.git

```

2. Install dependencies:

```bash
npm install

```

3. Run in development mode:

```bash
npm run dev

```

## 🧪 Quality and Standards

- **Strict Typing:** Every interface ensures data integrity between the store and the PDF renderer.
- **Security:** Session-based data lifecycle. No `localStorage` or `cookies` are used for sensitive info.
- **Creator Reference:** Official tool by [wasaka be](https://www.google.com/search?q=https://wasaka-be-official.vercel.app).
