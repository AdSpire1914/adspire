# Adspire Web

Modern React + TypeScript implementation of the Adspire marketing site with multilingual support and responsive contact interactions.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) for fast, modular UI development
- [TypeScript](https://www.typescriptlang.org/) with strict configuration for safer components
- [react-i18next](https://react.i18next.com/) for Bulgarian (default) and English localisation

## Project Structure

```
├── public
│   └── static
│       ├── favicons      # favicon + touch icons referenced in index.html
│       └── logo          # logo.png served from /static/logo/logo.png
├── src
│   ├── components        # global UI such as Header, Footer and LanguageSwitcher
│   ├── data              # lightweight config for services + contact cards
│   ├── i18n              # i18next bootstrap
│   ├── sections          # page sections (Hero, Services, Contact)
│   ├── styles            # global CSS tokens and layout rules
│   └── translations      # bg/en JSON dictionaries
```

Color palette lives in CSS variables (see `src/styles/global.css`) and is mirrored below for quick reference:

```
#3BB2BF, #025959, #0A2626, #3BBFBF, #F2F2F2
```

## Development

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server with HMR (http://localhost:5173)
npm run lint     # run ESLint against all TS/TSX files
npm run build    # type-check and generate production bundle in dist/
npm run preview  # preview the production build locally
```

## Internationalisation

- Default locale is Bulgarian (`bg`); English (`en`) is available through the header switcher (top-left).
- All static copy lives in `src/translations/*.json`. Add new keys to both files to keep locales in sync.
- User preference is cached in `localStorage` by `i18next-browser-languagedetector`.
