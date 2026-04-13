---
description: Use Playwright and Axe for UI, visual, and accessibility checks
globs:
  - "src/**/*"
  - "tests/**/*"
  - "playwright.config.ts"
alwaysApply: false
---

When checking UI quality in this project:

- Use `npm run test:e2e` for the full Playwright suite.
- Use `npm run test:a11y` for Axe accessibility checks on `/` and `/resume`.
- Use `npm run test:visual:update` to create screenshot baselines after intentional design changes.
- Use `npm run test:visual` to compare against saved baselines.
- Review both desktop and mobile projects from `playwright.config.ts`.
- Treat contrast, text clipping, layout shifts, and unreadable overlays as UI defects.
