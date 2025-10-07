# AFMAPEX

AFMAPEX is a web application for the African Maritime and Port Exhibition.  
It features multilingual support, event information, contact details, and document downloads.

## Features

- React + Vite project structure
- Routing with `react-router-dom`
- Internationalization (i18n) with English and French
- Responsive design with Tailwind CSS
- Custom components for each section (Header, Footer, About, Contact, Files, etc.)
- Easy to add new pages and translations

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
  components/      # Reusable React components
  pages/           # Page components for routing
  i18n/            # Translation files (en.json, fr.json)
  index.css        # Global styles (Tailwind)
  App.jsx          # Main app component
  main.jsx         # Entry point
public/
  images/          # Static images and favicon
```

## Internationalization

- All static texts are managed via `src/i18n/en.json` and `src/i18n/fr.json`.
- Use the `useTranslation` hook for dynamic translation in components.

## Customization

- Update images in `public/images/`
- Add new translation keys in `src/i18n/en.json` and `fr.json`
- Add new pages in `src/pages/` and update routing in `App.jsx`

## License

This project is for demonstration and event purposes.