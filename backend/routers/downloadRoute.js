import express from "express";
import { downloadPdf } from "../controllers/downloadController.js";

const router = express.Router();

router.post("/", downloadPdf);

export default router;
