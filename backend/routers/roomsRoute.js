import express from "express";
import {
  addRoom,
  deleteRoom,
  getAllRooms,
  getDoubleRooms,
  getRoom,
  getSingleRooms,
  getSpecialRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/", addRoom);
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);
router.delete("/:id", deleteRoom);
router.get("/singleRooms", getSingleRooms);
router.get("/doubleRooms", getDoubleRooms);
router.get("/specialRooms", getSpecialRooms);
router.get("/getAllRoom", getAllRooms);
router.get("/getRoom/:id", getRoom);

export default router;
