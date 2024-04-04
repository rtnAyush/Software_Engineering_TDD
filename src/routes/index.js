const express = require("express");
const urlRoutes = require("./url.routes.js");
const router = express.Router();

router.use("/", urlRoutes);


// router.get("*", function (req, res) {
//     res.status(404).json({ error: "Page not found" });
// });

module.exports = router;