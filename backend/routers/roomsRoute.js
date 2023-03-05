import express from "express";
import { addRoom, getRooms } from "../controllers/roomsControllers.js";

const router = express.Router();

router.post("/room", addRoom);
router.get("/rooms", getRooms);

export default router;
