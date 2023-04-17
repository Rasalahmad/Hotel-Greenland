import express from "express";
import {
  addRoom,
  deleteRoom,
  getAllRooms,
  getDoubleRooms,
  getRoom,
  getSingleRooms,
  getSpecialRooms,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/", addRoom);
router.delete("/:id", deleteRoom);
router.get("/singleRooms", getSingleRooms);
router.get("/doubleRooms", getDoubleRooms);
router.get("/specialRooms", getSpecialRooms);
router.get("/getAllRoom", getAllRooms);
router.get("/getRoom/:id", getRoom);

export default router;
