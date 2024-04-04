import express from "express";
import urlRoutes from "./url.routes.js";
const router = express.Router();

router.use("/", urlRoutes);


// router.get("*", function (req, res) {
//     res.status(404).json({ error: "Page not found" });
// });

export default router;