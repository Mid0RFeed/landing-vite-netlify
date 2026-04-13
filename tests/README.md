# Playwright + Axe Checks

## First-time setup

```bash
npm run playwright:install
```

## Useful commands

```bash
npm run test:e2e
npm run test:e2e:ui
npm run test:a11y
npm run test:visual
npm run test:visual:update
```

## Notes

- `test:a11y` checks `/` and `/resume` with Axe WCAG tags.
- `test:visual:update` creates or updates screenshot baselines.
- `test:visual` compares current screenshots against saved baselines.
- Playwright starts the Vite dev server automatically on `127.0.0.1:5173`.
