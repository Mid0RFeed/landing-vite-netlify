import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", name: "home" },
  { path: "/resume", name: "resume" },
];

for (const pageInfo of pages) {
  test(`${pageInfo.name} visual snapshot`, async ({ page }, testInfo) => {
    await page.goto(pageInfo.path);
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(
      `${pageInfo.name}-${testInfo.project.name}.png`,
      {
        fullPage: true,
        animations: "disabled",
        caret: "hide",
        maxDiffPixelRatio: 0.02,
      }
    );
  });
}
