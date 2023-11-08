import express from "express";
import {
  addReview,
  deleteReview,
  getReview,
  updateReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", addReview);
router.get("/", getReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
