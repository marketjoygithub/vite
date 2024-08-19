import express from "express";
import { getServices } from "../controller/servceController.js";

const router = express.Router()
router.get("/", getServices);

export default router;