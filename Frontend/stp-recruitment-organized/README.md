# STP Board Recruitment '27 — Application Form

A multi-step React + Vite application form styled after the STP (Steps
Towards Progress) burgundy/gold brand look.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## 📁 Project structure

```
src/
  assets/
    logo.png                 ← STP logo (swap this file to change the logo)
  components/
    Header.jsx                ← Logo + "welcome to / Board Recruitment '27"
    StepIndicator.jsx          ← 1 → 2 → 3 circles + step label
    Step1PersonalInfo.jsx      ← Name / Phone / Email / Gender fields
    DynamicQuestionStep.jsx    ← Renders Step 2 & 3 from data/questions.js
    TextField.jsx              ← Reusable input
    TextAreaField.jsx          ← Reusable textarea
    SelectField.jsx            ← Reusable dropdown
    RadioField.jsx             ← Reusable radio/pill group (also used for Gender)
    NavButtons.jsx             ← Next / Back / Submit buttons
    SuccessScreen.jsx          ← Final "thank you" screen
  data/
    questions.js               ← ⭐ EDIT HERE to change Step 2 & 3 questions
  utils/
    validation.js              ← Validation rules (required fields, email, phone)
  styles/
    index.css                  ← ⭐ EDIT HERE to change colors/fonts/spacing
  App.jsx                       ← Wires steps together + form state
  main.jsx                      ← React entry point
```

## ✏️ Where to edit things

### Change the Step 2 / Step 3 questions
Open **`src/data/questions.js`**. Each question is a plain object:

```js
{
  id: 'committee',            // unique key, no spaces
  label: 'Which committee...', // question text
  type: 'select',              // 'text' | 'textarea' | 'select' | 'radio'
  required: true,
  options: ['HR', 'Marketing'], // only for 'select' and 'radio'
}
```

Add, remove, or reorder objects in the `step2Questions` / `step3Questions`
arrays — the form updates automatically, no component changes needed.

### Change colors / fonts
Open **`src/styles/index.css`** and edit the CSS variables at the top of the
file (`:root { ... }`), e.g.:

```css
--color-bg-dark: #3a0f10;   /* darkest burgundy */
--color-gold: #e0b96a;      /* gold border/accents */
--font-main: 'Baloo 2', ...; /* main font */
```

To use a different Google Font, update the `<link>` tag in `index.html` and
the `--font-main` variable.

### Change the logo
Replace **`src/assets/logo.png`** with your own image (same filename), or
change the import path in `src/components/Header.jsx`.

### Change validation rules
Open **`src/utils/validation.js`**:
- `isValidEmail` — email format check
- `isValidPhone` — accepts Egyptian numbers (e.g. `01012345678`,
  `+201012345678`) and general international numbers
- `validateStep1` — required-field rules for Step 1
- `validateDynamicStep` — generic "required" check used for Steps 2 & 3
  (driven entirely by the `required: true/false` flags in `questions.js`)

## 🧠 How submission works

On the final "Submit" click, `App.jsx` merges all three steps' data into one
object and logs it to the browser console:

```js
const fullSubmission = { ...step1Data, ...step2Data, ...step3Data }
console.log('STP Board Recruitment submission:', fullSubmission)
```

There is no backend in this project. To send the data somewhere (e.g. Google
Sheets, Firebase, an API), replace the `console.log` line inside
`handleNext()` in `src/App.jsx` with your own request (e.g. `fetch(...)`).

## ✅ Notes

- Pure JavaScript + CSS — no TypeScript, no UI framework dependency.
- Fully responsive; tested down to small mobile widths.
- No page reloads between steps — everything is client-side React state.
- Data is preserved when navigating Back and Forward between steps.
