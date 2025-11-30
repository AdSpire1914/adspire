# Repository Guidelines

## Project Structure & Module Organization
The project runs on React with TypeScript. `src/` contains the entry point (`main.tsx`), route-level layouts in `src/pages/`, and reusable UI in `src/components/`. Keep shared styles under `src/styles/` and export theme tokens (the palette from `README.md`) through `src/styles/theme.ts`. Static assets such as `logo.png` live inside `public/` and are referenced with `/logo.png` so bundlers resolve them correctly.

## Build, Test, and Development Commands
- `npm install` — install React, TypeScript, Vite, and lint/test tooling; re-run when dependencies change.
- `npm run dev` — start the Vite dev server with hot reload at http://localhost:5173.
- `npm run build` — produce an optimized static bundle in `dist/` for GitHub Pages.
- `npm run preview` — sanity-check the production bundle locally before pushing.
- `npm run lint` / `npm run format` — enforce ESLint + Prettier rules across `.tsx` and `.ts`.

## Coding Style & Naming Conventions
Use TypeScript everywhere (`.tsx` for components, `.ts` for utilities) and type props explicitly. Prefer functional components, React hooks, and local state colocated with the component. Follow two-space indentation, lowercase-kebab CSS class names, and PascalCase component filenames (e.g., `HeroSection.tsx`). When styling, import shared variables from `theme.ts` rather than hard-coding hex codes; scoped CSS modules or styled-components are acceptable but stay consistent within a feature.

## Testing Guidelines
Unit tests use Vitest with React Testing Library. Name test files `ComponentName.test.tsx` alongside the component. Run `npm run test -- --watch` during development, and ensure CI-friendly `npm run test -- --runInBand` passes before raising a PR. Focus coverage on interactive components and accessibility helpers.

## Commit & Pull Request Guidelines
History follows Conventional Commits (`feat:`, `fix:`, `chore:`). Keep messages imperative and scoped (`feat: add hero carousel`). Pull requests must include a short summary, linked issue numbers, screenshots or screen captures for UI work, and a checklist confirming `npm run lint`, `npm run test`, and `npm run build` were executed locally. Limit PRs to one feature or bug fix to keep review cycles fast.

## Deployment & Configuration Tips
The site deploys via GitHub Pages from the `dist/` artifacts produced by Vite. Ensure `vite.config.ts` points to the correct base URL (`/adspire/`). When introducing new environment variables, prefix them with `VITE_` so the client bundle receives them, and document defaults in `.env.example`. Update Open Graph tags inside `src/pages/index.tsx` whenever imagery or copy changes to keep shares accurate.
