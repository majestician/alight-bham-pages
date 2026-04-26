# SGI-USA Birmingham West District

A static website for the SGI-USA Birmingham West District in Alabama.

Built with React + Vite + Tailwind, designed to be hosted as a free static site on **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and publishes the site to GitHub Pages on every push to `main`.

### One-time setup

1. Push this repository to GitHub (e.g. `https://github.com/<you>/birmingham-west-sgi`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` — the workflow will build and deploy automatically.

Your site will be live at:

```
https://<your-username>.github.io/<repo-name>/
```

The workflow automatically sets Vite's `base` to `/<repo-name>/` so all assets resolve correctly. It also copies `index.html` to `404.html` so deep links (and refresh) work for the single-page app.

### Custom domain

To use a custom domain, add a `CNAME` file inside `public/` containing your domain (e.g. `birminghamwestsgi.org`), then configure DNS as described in the [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Editing district details

Real district info is intentionally left as `[TBD]` placeholders. To customize, search the project for `[TBD` and replace with your meeting times, contact email, etc. Key files:

- `src/components/Meetings.tsx` — meeting schedule
- `src/components/Contact.tsx` — contact email & area info

## About the content

This is a community page maintained by district members. All Buddhist concepts and language reference materials published by SGI-USA. It is not an official SGI-USA publication.
