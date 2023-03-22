import express from "express";
import { addNews, getNews } from "../controllers/newsController.js";

const router = express.Router();

router.post("/", addNews);
router.get("/", getNews);

export default router;
