const express = require("express");
const puppeteer = require("puppeteer");
const config = require("../config/index");
const router = express.Router();

const exportApi = () => {
  async function getScreenShot(token) {
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
    const url = `${config.originUrl}/#/screen/cebc/overview`;

    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    await page.evaluate(() => {
      sessionStorage.setItem("dc-token", token);
    });

    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    await page.waitFor(10000);

    await page.screenshot({ path: "./dist/fullpage.png", fullPage: true });
    browser.close();
  }
  router.post("/", function (req, res) {
    console.log(req.header("Authorization"));
    // getScreenShot().then()
    res.send({});
  });
  return router;
};

module.exports = function () {
  router.use(function (err, req, res, next) {
    console.log(req);
  });
  router.use("/export", exportApi());
  return router;
};
