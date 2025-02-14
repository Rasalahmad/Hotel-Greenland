import express from "express";
import {
  addRoom,
  deleteRoom,
  getRoom,
  getRoomTransaction,
  getRooms,
  updateAvailability,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/", addRoom);
router.get("/", getRooms);
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);
router.put("/makeUnavailable/:id", updateAvailability);
router.delete("/:id", deleteRoom);
router.get("/getRoom/:id", getRoom);
router.get("/transaction/:id", getRoomTransaction);

export default router;
