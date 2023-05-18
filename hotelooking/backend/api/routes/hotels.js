import express from "express";
import {
  countByCity,
  countByType,
  getHotelRooms,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/room/:id", getHotelRooms);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
