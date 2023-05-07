import Room from "../models/roomsModel.js";
import { ObjectId } from "mongodb";

export const addRoom = async (req, res) => {
  const room = new Room(req.body);
  try {
    const result = await room.save();
    res.status(200).json({
      status: true,
      message: "Romm added successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors = error.errors[key];
      });
      return res.status(400).json({
        status: false,
        error: errors,
      });
    }
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const getSingleRooms = async (req, res) => {
  const rooms = await Room.find({ roomType: "single room" });
  try {
    res.status(200).json({
      status: true,
      data: rooms,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};
export const getDoubleRooms = async (req, res) => {
  const rooms = await Room.find({ roomType: "double room" });
  try {
    res.status(200).json({
      status: true,
      data: rooms,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};
export const getSpecialRooms = async (req, res) => {
  const rooms = await Room.find({ roomType: "special room" });
  try {
    res.status(200).json({
      status: true,
      data: rooms,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const getAllRooms = async (req, res) => {
  const rooms = await Room.find({});
  try {
    res.status(200).json({
      status: true,
      data: rooms,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const getRoom = async (req, res) => {
  const room = await Room.findOne({ _id: ObjectId(req.params.id) });
  try {
    res.status(200).json({
      status: true,
      data: room,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updated = await Room.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Room updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Room can't update",
      error,
    });
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $push: {
          unavailableDates: req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete({ _id: ObjectId(req.params.id) });
    if (room) {
      res.status(200).json({
        status: true,
        message: "Room Deleted successfully",
      });
    } else {
      res.status(404).send("Item not found");
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Member can't Delete",
      error,
    });
  }
};
