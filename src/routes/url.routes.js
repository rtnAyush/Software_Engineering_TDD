import express from "express";
const router = express.Router();


router.get("/", async (req, res) => {
  res.send('index')
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.status(404);
});


export default router;