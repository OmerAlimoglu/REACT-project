import express from "express";
import {
  getHotelRooms,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/room/:id", getHotelRooms);

export default router;
