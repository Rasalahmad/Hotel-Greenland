import express from "express";
import {
  addRoom,
  getAllRooms,
  getDoubleRooms,
  getSingleRooms,
  getSpecialRooms,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/room", addRoom);
router.get("/singleRooms", getSingleRooms);
router.get("/doubleRooms", getDoubleRooms);
router.get("/specialRooms", getSpecialRooms);
router.get("/getAllRoom", getAllRooms);

export default router;
