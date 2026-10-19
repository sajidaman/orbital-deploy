# ORBITAL — Next.js deployment demo

A responsive, cinematic space-themed landing page built with Next.js App Router, React, TypeScript, and CSS. Designed as a simple project to practice the GitHub → Vercel deployment workflow.

## Features

- Responsive dark-space design with CSS-generated planetary artwork
- Mobile navigation menu
- Interactive demo signup form (front-end only; does not send or store email)
- Accessible labels and reduced-motion support
- No API keys or environment variables required

## Requirements

- Node.js 20.9 or newer
- npm
- A GitHub account
- A Vercel account

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Check that a production build works:

```bash
npm run build
npm start
```

## Publish to GitHub

1. Create a new **empty** repository on GitHub, for example `orbital-deploy-demo`.
2. Do not add a README, license, or `.gitignore` on GitHub (this project already includes them).
3. In a terminal, change directory to this project and run:

```bash
git init
git add .
git commit -m "Create ORBITAL landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/orbital-deploy-demo.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repository name with your own. If Git asks you to authenticate, follow GitHub's sign-in prompt.

## Deploy on Vercel

1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project**.
3. Import your `orbital-deploy-demo` GitHub repository.
4. Leave the framework as **Next.js**. Vercel should detect it automatically.
5. Keep the default build settings. No environment variables are needed.
6. Click **Deploy** and wait for the build to finish.
7. Open the generated `.vercel.app` URL to view your live site.

## Test automatic deployments

1. Edit a visible phrase in `app/page.tsx`.
2. Commit and push the change:

```bash
git add .
git commit -m "Update landing page copy"
git push
```

3. Open the Vercel project’s **Deployments** tab. Vercel should start a new deployment automatically.
4. When it completes, refresh your site to see the update. Vercel also creates preview deployments for other branches and pull requests.

## Project structure

```text
orbit-deploy-demo/
├── app/
│   ├── globals.css     # Design system and responsive styles
│   ├── layout.tsx      # Root layout and metadata
│   └── page.tsx        # Landing page and interactions
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Notes

- The planet illustrations are CSS artwork, so the page does not depend on external image assets.
- Google Fonts are loaded from Google Fonts when the site is online. System fallbacks are provided.
- The signup form only changes the UI in your browser. To collect real emails, connect a backend or form service and update the privacy notice.