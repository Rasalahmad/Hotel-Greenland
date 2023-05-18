import express from "express";
import { addFood, getFood ,getSingleFood} from "../controllers/restaurantController.js";

const router = express.Router();

router.post("/", addFood);
router.get("/", getFood);
router.get("/:title",getSingleFood);

export default router;