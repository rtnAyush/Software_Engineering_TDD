const express = require("express");
const router = express.Router();
const UrlModel = require("../models/url.model.js");


router.post("/", async (req, res) => {
  const { originalURL } = req.body;
  try {
    if (!originalURL) {
      throw new Error("originalURL is required");
    }
    const foundUrl = await UrlModel.findOne({ originalURL });
    if (foundUrl) {
      return res.json({ originalURL: foundUrl.originalURL, create: foundUrl.shortURL });
    }
    const create = await UrlModel.create({ originalURL });

    res.json({ originalURL: create.originalURL, create: create.shortURL });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foundUrl = await UrlModel.findById(id);
    if (!foundUrl) {
      throw new Error("URL not exits");
    }
    res.redirect(301, foundUrl.originalURL)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

});

router.patch("/check-duplicate", async (req, res) => {
  const { originalURL } = req.query;
  try {
    // console.log(originalURL);
    const foundUrl = await UrlModel.findOne({ originalURL: { $regex: new RegExp(`^${originalURL.trim()}$`, "i") } });
    // console.log(foundUrl);
    if (!foundUrl) {
      throw new Error("URL not exits");
    }
    res.json(foundUrl.originalURL)
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }

});

module.exports = router;