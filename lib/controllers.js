const scraper = require("./scraper");
const shortid = require("shortid");

async function create(req, res) {
  try {
    const id = shortid.generate();
    await scraper.createInstance(id);

    res.send({ message: `Instance created`, id });
  } catch (error) {
    console.error(error);
    res.send(`Failed to create instance.`);
  }
}

async function title(req, res) {
  try {
    const { id, url } = req.params;
    const title = await scraper.getTitle(id, url);
    res.send({ id, url, title });
  } catch (error) {
    console.error(error);
    res.send(`Failed to get title.`);
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    await scraper.closeInstance(id);
    res.send({ message: `Instance closed`, id });
  } catch (error) {
    console.error(error);
    res.send(`Failed to close instance.`);
  }
}

module.exports = {
  create,
  title,
  remove
};
