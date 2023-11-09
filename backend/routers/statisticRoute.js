import express from "express";
import { getWidgetStatistic } from "../controllers/statisticController.js";

const router = express.Router();

router.get("/widget", getWidgetStatistic);

export default router;
