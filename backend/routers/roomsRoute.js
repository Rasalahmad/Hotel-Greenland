import express from "express";
import { addRoom, getAllRooms } from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/room", addRoom);
router.get("/getAllRoom", getAllRooms);

export default router;
