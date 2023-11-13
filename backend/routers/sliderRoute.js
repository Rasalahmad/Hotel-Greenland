import express from "express";
import { addSlider, getSlider } from "../controllers/sliderController.js";

const router = express.Router();

router.post("/", addSlider);
router.get("/", getSlider);

export default router;
