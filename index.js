const puppeteer = require("puppeteer");

async function runTest() {
  const browser = await puppeteer.launch({
    headless: false,
    timeout: 10000,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  const url = "http://10.3.72.39/#/screen/cebc/overview";

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.evaluate(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzV29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIiwiaWQiOjEsInVzZXJOYW1lIjoiYWRtaW4ifQ.zQCsV9nwFigUdkNGC3f5bpH_PMDEaalu2VOtul8NAxo";
    sessionStorage.setItem("dc-token", token);
  });

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.waitFor(10000);

  await page.screenshot({ path: "./dist/fullpage.png", fullPage: true });
  browser.close();
}

runTest();
