import express from "express";
import { getBookingStatistic } from "../controllers/statisticController.js";

const router = express.Router();

router.get("/booking", getBookingStatistic);

export default router;
