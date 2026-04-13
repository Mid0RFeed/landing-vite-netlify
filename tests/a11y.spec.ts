import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", name: "home" },
  { path: "/resume", name: "resume" },
];

for (const pageInfo of pages) {
  test(`${pageInfo.name} has no critical accessibility violations`, async ({
    page,
  }) => {
    await page.goto(pageInfo.path);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const seriousViolations = results.violations.filter((violation) =>
      ["critical", "serious"].includes(violation.impact ?? "")
    );

    expect(seriousViolations).toEqual([]);
  });
}
