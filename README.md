# Xmasora 2025

A static event landing page for Xmasora 2025, an inter-university flyer-designing competition organized by the Rotaract Club of Sabaragamuwa University of Sri Lanka.

## Run locally

This is a static HTML site. You can open `index.html` directly, or serve the repository locally:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Quality checks

Node.js 22 or newer:

```bash
npm test
```

The test checks key document metadata and verifies that the archived event page clearly indicates that the 2025 event has concluded.

## Maintenance notes

- This repository is an archive of the 2025 event. The submission and voting dates are historical and must not be changed unless a new event is officially announced.
- The expired submission action is removed from the page; the old Google Form URL is not presented as an open submission route.
- Contact links contain personal contact details. Confirm that listed organizers still consent to publishing them before reusing or republishing the page.
- The page uses third-party CDN assets (Tailwind CSS, AOS, Google Fonts, and Font Awesome). For a long-term production site, pin and self-host dependencies where practical, and review the CSP and privacy implications.
- This is a static information page. It has no backend, authentication, or server-side form handling.
