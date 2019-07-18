const puppeteer = require("puppeteer");
const instances = {};

async function createInstance(id) {
  // launch browser and create a single page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // save it to the instance list
  if (!instances[id]) instances[id] = {};
  instances[id] = { page, browser };
}

async function getTitle(id, url) {
  // import from instance list
  const { page } = instances[id];

  // navigate completely and grab data
  await page.goto(url, { waitUntil: "networkidle0" });
  return page.title();
}

async function closeInstance(id) {
  // import from instance list
  const { browser, page } = instances[id];

  // close page instances
  await page.close();
  await browser.close();

  // clean up
  instances[id] = {};
}

module.exports = { createInstance, getTitle, closeInstance };
