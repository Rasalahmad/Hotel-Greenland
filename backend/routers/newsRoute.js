import express from "express";
import { addNews, deleteNews, getNews } from "../controllers/newsController.js";

const router = express.Router();

router.post("/", addNews);
router.get("/", getNews);
router.delete("/:id", deleteNews);

export default router;
