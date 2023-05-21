import express from "express";
import { addFood, getFood ,getSingleFood, updateRestaurant} from "../controllers/restaurantController.js";

const router = express.Router();

router.post("/", addFood);
router.get("/", getFood);
router.get("/:title",getSingleFood);
router.put("/:id",updateRestaurant);

export default router;