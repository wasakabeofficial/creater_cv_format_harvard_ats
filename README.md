# Harvard CV Generator 2026 (Zero-Data Edition) - Restrructured Project

A minimalist resume generator designed according to the **Harvard 2026** recruitment standards, optimized for **ATS** (Applicant Tracking Systems).

## 🛡️ Privacy by Design (Zero-Data)

This project is built on a philosophy of **total privacy**:

- **No Database:** Your data resides exclusively in your browser's volatile memory via **Zustand**.
- **Local Processing:** PDF generation occurs strictly on the client side using `@react-pdf/renderer`.
- **Session Wipe:** Includes `securityUtils.wipeSessionData()` logic. When you reset the CV or refresh the page, all information is permanently deleted. We do not track, store, or monitor your personal information.

## 🎓 Harvard 2026 Standard

The design adheres to the strictest academic and professional guidelines:

- **Typography:** Exclusive use of standard Serif/Sans-Serif fonts (10pt - 12pt) for high-parsing accuracy.
- **Structure:** Single-column layout for maximum compatibility with modern ATS readers.
- **Dynamic Skills:** Organized by professional categories (e.g., Programming, Tools, Soft Skills) as demanded by the 2026 job market.
- **Naming Convention:** Automatic file generation using the format: `CV_FullName_2026.pdf`.

## 🛠️ Technology Stack

- **Core:** React 18 + Vite.
- **State Management:** **Zustand** (Store-based architecture for clean, unidirectional data flow).
- **Language:** TypeScript (Strict typing with zero abbreviations).
- **Styles:** Tailwind CSS + CSS Variables (Precise handling of the Harvard visual identity).
- **PDF Engine:** `@react-pdf/renderer` with internal metadata injection.

## 🏗️ Architecture & Directory Structure

The project follows a **Feature-Based Architecture**, organized to maintain a strict separation between data logic and the Harvard visual standard.

```text
src/
├── components/
│   ├── layout/             # Section-specific form logic
│   │   ├── Personal/       # Personal information forms
│   │   ├── Work/           # Experience & professional history
│   │   ├── Education/      # Academic background
│   │   ├── Skill/          # Categorized skills manager
│   │   ├── Languages/      # Multi-language proficiency
│   │   └── Footer/         # Harvard 2026 reference footer
│   └── ui/                 # Reusable atomic components (Button, Input, etc.)
├── constants/              # Strategic data for Harvard standards
│   ├── action-verbs.ts     # Curated list of high-impact verbs
│   ├── ui-translations.ts  # Interface localization
│   └── ...                 # English/Spanish specific verb sets
├── features/
│   ├── editor/             # Multi-step orchestration logic
│   └── preview/            # Real-time synchronization
│       └── pdf/            # CVDocument.tsx & PreviewLayout.tsx
├── hooks/
│   └── useCurriculumVitae.ts # Specialized Zustand state hook
├── tests/
│   └── ui/                 # Unit and integration test suites
├── types/
│   ├── cv/                 # Resume data interfaces
│   ├── master/             # Global application types
│   └── ui/                 # Component prop definitions
├── App.tsx                 # Main application entry
├── main.tsx                # React DOM render point
└── index.css               # Harvard typography & global tokens

```

## 🧱 Interface Components (Design Library)

Following our strict rule of **explicit naming (no abbreviations)**:

- **`PersonalInfoForm`**: Manages contact data and professional summary.
- **`ExperienceForm`**: Dynamic list manager for professional background with bullet point support and action verb integration.
- **`EducationForm`**: Structured input for academic history, including GPA and field of study.
- **`SkillsForm`**: A categorical manager allowing users to group tools and technologies (e.g., "Languages", "Frameworks").
- **`ActionVerbs`**: Strategic constant sets that provide high-impact terminology to improve ATS scoring.
- **`Footer`**: A high-fidelity, compact footer with 2026 compliance links (Harvard OCS, Solución Laboral Perú, and Midudev Reference).

## 🚀 Installation and Use

1. **Clone the repository:**

```bash
git clone git@github.com:wasakabeofficial/creater_cv_format_harvard_ats.git

```

2. **Install dependencies:**

```bash
npm install

```

3. **Run in development mode:**

```bash
npm run dev

```

## 🧪 Quality and Standards

- **Strict Typing:** Every interface ensures data integrity between the store and the PDF renderer.
- **Security:** Session-based data lifecycle. No `localStorage` or `cookies` are used for sensitive information.
- **Metadata:** Injected 2026 timestamps and author tags within the PDF binary for professional indexing.
- **Creator Reference:** Official tool by [wasaka-be-official.vercel.app](https://www.google.com/search?q=https://wasaka-be-official.vercel.app).

---

2026
