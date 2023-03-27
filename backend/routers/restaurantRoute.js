import express from "express";
import { addFood, getFood } from "../controllers/restaurantController.js";

const router = express.Router();

router.post("/", addFood);
router.get("/", getFood);

export default router;