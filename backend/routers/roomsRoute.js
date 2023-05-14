import express from "express";
import {
  addRoom,
  deleteRoom,
  getAllRooms,
  getAllRoomsInDashBoard,
  getDoubleRooms,
  getRoom,
  getSingleRooms,
  getSpecialRooms,
  updateAvailability,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/", addRoom);
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);
router.put("/makeUnavailable/:id", updateAvailability);
router.delete("/:id", deleteRoom);
router.get("/singleRooms", getSingleRooms);
router.get("/doubleRooms", getDoubleRooms);
router.get("/specialRooms", getSpecialRooms);
router.get("/getAllRoom", getAllRooms);
router.get("/getAllRooms", getAllRoomsInDashBoard);
router.get("/getRoom/:id", getRoom);

export default router;
