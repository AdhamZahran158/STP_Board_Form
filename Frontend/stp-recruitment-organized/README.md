# STP Recruitment Application

Organized from the uploaded single-file React/TSX form.

## Structure

- `src/App.jsx` — app state and submission flow
- `src/components/RecruitmentForm.jsx` — form UI
- `src/components/SubmittedScreen.jsx` — successful submission screen
- `src/validation/schemas.js` — Yup validation schemas
- `src/data/formData.js` — initial values, committee options, section metadata
- `src/main.jsx` — React entry point
- `src/styles.css` — Tailwind/CSS entry
- `public/` — static assets

## Run

```bash
npm install
npm run dev
```

Put `STP-Image.png` inside `public/` because the original code references it as `/STP-Image.png`.
