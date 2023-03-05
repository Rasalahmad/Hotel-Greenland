import Room from "../models/roomsModel.js";

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
