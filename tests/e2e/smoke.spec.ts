import { expect, test } from "@playwright/test";

test("home renders the tool and trust copy without ad markup", async ({ page }) => {
  const failed: string[] = [];
  const consoleErrors: string[] = [];
  page.on("response", (response) => {
    if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`);
  });
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));
  await page.goto("/");
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle(/VoiceToTextFree/);
  expect(failed).toEqual([]);
  expect(consoleErrors).toEqual([]);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("subtitle generator");
  await expect(page.getByRole("link", { name: "VoiceToTextFree home" })).toBeVisible();
  await expect(page.getByText("No upload, no account, no credit card.")).toBeVisible();
  await expect(page.getByText("Abdul Samad").first()).toBeVisible();
  await expect(page.locator('input[type="file"]')).toHaveCount(1);
  await expect(page.locator(".tool-frame")).toHaveCount(1);
  await expect(page.locator(".adsbygoogle")).toHaveCount(0);
});

test("home has no horizontal overflow at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("guide has no horizontal overflow at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/guides/srt-vs-vtt/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("guides index and a guide render", async ({ page }) => {
  await page.goto("/guides/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.goto("/guides/srt-vs-vtt/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("SRT vs VTT");
  await expect(page.getByRole("heading", { name: /frequently asked questions/i })).toBeVisible();
});

test("tool page loads the editor workbench", async ({ page }) => {
  await page.goto("/srt-editor/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("SRT editor");
  await expect(page.getByText(/import|drop/i).first()).toBeVisible();
});

test("language page stays honest about testing", async ({ page }) => {
  await page.goto("/subtitle-generator/urdu/");
  await expect(page.getByText(/Accuracy note:/)).toBeVisible();
  await expect(page.getByText(/not in the search index/i)).toBeVisible();
  await expect(page.locator(".adsbygoogle")).toHaveCount(0);
});

test("studio is ad-free and noindex", async ({ page }) => {
  await page.goto("/studio/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator(".adsbygoogle")).toHaveCount(0);
});

test("privacy, contact and authorship pages are reachable", async ({ page }) => {
  await page.goto("/privacy-policy/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.goto("/contact/");
  await expect(page.getByRole("main")).toContainText("Abdul Samad");
  await expect(
    page.getByRole("main").getByRole("link", { name: "ihsanaslamm@gmail.com" })
  ).toBeVisible();
  await page.goto("/about/");
  await expect(page.getByRole("main")).toContainText("Abdul Samad");
  await expect(page.getByRole("contentinfo")).toContainText("Built and maintained by Abdul Samad");
});

test("caches the app shell for an offline reload", async ({ page, context }) => {
  await page.goto("/");
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("subtitle generator");
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  await context.setOffline(true);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("subtitle generator");
  await context.setOffline(false);
});

function silentWav(seconds = 1) {
  const data = Buffer.alloc(16_000 * 2 * seconds);
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(16_000, 24);
  header.writeUInt32LE(32_000, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(data.length, 40);
  return Buffer.concat([header, data]);
}

test("ffmpeg extracts a local audio track", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/");
  await page.locator('input[type="file"]').setInputFiles({
    name: "silence.wav",
    mimeType: "audio/wav",
    buffer: silentWav()
  });
  await expect(page.locator(".output-frame")).toBeVisible();
  await page.getByRole("button", { name: /Generate subtitles/ }).click();
  await expect(page.locator("#progress-heading")).toHaveText(/Loading the model|Transcribing/, {
    timeout: 90_000
  });
  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(page.getByText("silence.wav")).toBeVisible();
  expect((await page.getByRole("alert").allInnerTexts()).filter(Boolean)).toEqual([]);
});
