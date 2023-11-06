import express from "express";
import {
  addReview,
  getReview,
  updateReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", addReview);
router.get("/", getReview);
router.patch("/:id", updateReview);

export default router;
