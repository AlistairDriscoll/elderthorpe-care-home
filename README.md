# Elderthorpe Care Home

A frontend repository for a residential care home, specialising in care for those with dementia.

The site is being built as a modern React application and will eventually include features such as photo galleries, news updates, and general information for families and visitors.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Project Structure

```text
├── index.html
├── package.json
├── vite.config.ts
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   └── assets
└── README.md
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build the site for production
- `npm run preview` — preview the production build locally

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal:

Usually [http://localhost:5173](http://localhost:5173)

## Build For Production

Create an optimized production build:

```bash
npm run build
```

Vite compiles the application and outputs static files into the `dist/` directory.

These files are optimized for production and include:

- Bundled and minified JavaScript
- Processed Tailwind CSS
- Optimized assets

### Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

This runs a local server so you can test the built site before deployment.

---

### What this means in practice

During development you run:

```bash
npm run dev
```

This starts the Vite development server.

When you're ready to deploy, run:

```bash
npm run build
```

This generates the production-ready site in the `dist/` directory.

That dist folder is what gets deployed to platforms like:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel

## Deployment

This project builds to static files and can be deployed to platforms such as:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel

To generate the production build:

```bash
npm run build
```

The output will be placed in the `dist/` directory, which contains the static files that should be deployed.

---
