import { expect, test } from "@playwright/test";

test("home page renders primary content", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Хорошенков Егор" })).toBeVisible();
  await expect(page.getByText("репетитор и IT-наставник")).toBeVisible();
  await expect(page.getByRole("link", { name: "Написать в Telegram" }).first()).toHaveAttribute(
    "href",
    "https://t.me/Mango_Ice_Cream"
  );
});

test("resume route renders resume content", async ({ page }) => {
  await page.goto("/resume");

  await expect(page.getByRole("heading", { name: "Хорошенков Егор" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Образование" })).toBeVisible();
  await expect(page.getByText("University of London")).toBeVisible();
});

test("home page advantage nodes are keyboard accessible", async ({ page }) => {
  await page.goto("/");

  const advantage = page.getByRole("button", {
    name: /Объяснение без давления/,
  });

  await advantage.focus();
  await expect(advantage).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(advantage).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText("Темп, примеры и формат подстраиваются под ученика")
  ).toBeVisible();
});

for (const pageInfo of [
  { path: "/", name: "home" },
  { path: "/resume", name: "resume" },
]) {
  test(`${pageInfo.name} has no horizontal overflow`, async ({ page }) => {
    await page.goto(pageInfo.path);
    await page.waitForLoadState("networkidle");

    const overflow = await page.evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth - root.clientWidth;
    });

    expect(overflow).toBeLessThanOrEqual(1);
  });
}
