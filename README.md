# Mangal Joe Edwin Portfolio

Personal product marketing portfolio published with GitHub Pages.

## Live site

https://mangaljoeedwin.github.io/mangal-portfolio/

## Source of truth

The `main` branch of this repository is the canonical version of the portfolio.

Do not maintain a separate production copy of the portfolio elsewhere. Changes should be made to the files in this repository and committed to `main`.

## Publishing workflow

1. Make the required portfolio change in this repository.
2. Review the changed files and content.
3. Commit the approved changes to `main`.
4. GitHub Pages publishes the latest version from the repository.
5. Verify the change on the live site.

### Preferred ChatGPT workflow

When working with ChatGPT or Work, use this repository as the starting point rather than editing an independent exported copy.

Typical instruction:

> Update my `Mangaljoeedwin/mangal-portfolio` GitHub portfolio. Read the current files from `main`, make the requested changes, preserve the existing design system unless I ask otherwise, commit the changes to `main`, and verify the published site.

## Site structure

- `index.html` — Home
- `about.html` — About
- `work.html` — Selected work and case studies
- `operating-system.html` — PMM operating system
- `writing.html` — Writing and field notes
- `contact.html` — Contact
- `assets/` — CSS, JavaScript, images, and other site assets

## Architecture

```text
ChatGPT / Work
      ↓
GitHub repository (`main`)
      ↓
GitHub Pages
      ↓
Public portfolio
```

No database or Supabase backend is required for the current static portfolio.