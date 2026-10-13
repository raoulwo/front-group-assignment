# VuePoint

## About VuePoint

VuePoint is a conference platform for FrontendNow, built with Nuxt 4, Vue 3, TypeScript, Tailwind CSS, and Nuxt UI.

The application provides conference information, session search and filtering, speaker profiles, tracks, and rooms. The personal conference schedule ("Mein Programm") is planned for a later development step.

## Project Structure


The token structure supports the existing light and dark themes.

- `app/pages/` – application pages and file-based routing
- `app/components/` – reusable UI, feature, and layout components
- `app/composables/` – reusable data access and application logic
- `app/data/` – local conference dataset
- `app/types/` – TypeScript data models
- `app/assets/css/` – global CSS
- `tokens/` – design tokens and theme-related variables

## Design Tokens

VuePoint uses centralized design tokens defined in `tokens/tokens.css`. The token file is imported through `app/assets/css/main.css` and integrates with Tailwind CSS and Nuxt UI.

The design system includes French Blue and Dim Grey color palettes, semantic color aliases, and references to the existing typography and spacing scales.

## Conference Data

Conference information is stored in `app/data/conference-data.json` and provided through `useConferenceData.ts`.

Session searching and filtering are handled by `useSessions.ts`.

## Architecture Documentation

Architecture and design decisions for Schritt 1 are documented in `docs/schritt1/`:

- `01-branding-design-tokens.md` – branding, color palette, typography, spacing, and accessibility
- `02-architektur-adr.md` – component architecture and architectural decisions
- `03-state-management-konzept.md` – planned state management and persistence for "Mein Programm"
- `04-technologie-adr.md` – technology selection and project setup

## Setup

Make sure to install dependencies:

```bash
npm install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

### Formatting and Linting

Eslint is setup to both lint and format the code:

```bash
# Check for linter errors.
npm run lint

# Fix linter and formatting errors.
npm run format
```
