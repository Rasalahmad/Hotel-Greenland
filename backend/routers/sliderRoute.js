import express from "express";
import {
  addSlider,
  getSlider,
  deleteSlider,
} from "../controllers/sliderController.js";

const router = express.Router();

router.post("/", addSlider);
router.get("/", getSlider);
router.delete("/:id", deleteSlider);

export default router;
