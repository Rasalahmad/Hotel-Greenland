import express from "express";
import { addDish, addFood, getFood ,getSingleFood, updateRestaurant} from "../controllers/restaurantController.js";

const router = express.Router();

router.post("/", addFood);
router.post("/:id", addDish);
router.get("/", getFood);
router.get("/:title",getSingleFood);
router.put("/:id",updateRestaurant);

export default router;