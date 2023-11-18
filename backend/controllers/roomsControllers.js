import mongoose from "mongoose";
import Room from "../models/roomsModel.js";
import { ObjectId } from "mongodb";

export const addRoom = async (req, res) => {
  const room = new Room(req.body);
  try {
    const result = await room.save();
    res.status(200).json({
      status: true,
      message: "Room added successfully",
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

export const getRooms = async (req, res) => {
  const roomType = req?.params?.roomType.split("_").join(" ");
  console.log(roomType);
  const rooms = await Room.find({
    ...(roomType !== "all" ||
      (roomType !== "all dashboard" && {
        roomType: roomType ? roomType : null,
      })),
    ...(roomType === "all dashboard" ? {} : { isAvailable: "Available" }),
  });
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
  try {
    const room = await Room.findOne({ _id: ObjectId(req.params.id) }).populate(
      "bookings"
    );

    if (!room) {
      return res.status(404).json({
        status: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      status: true,
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Data can't be fetched",
      error: error.message,
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
      { _id: req.params.id },
      {
        $push: {
          unavailableDates: req.body.dates,
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

export const updateAvailability = async (req, res, next) => {
  try {
    const data = await Room.updateOne(
      { _id: req.params.id },
      { $set: { isAvailable: req.body.isAvailable } }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
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

export const getRoomTransaction = async (req, res) => {
  try {
    const roomId = req.params.id;

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 6);

    const pipeline = [
      {
        $match: {
          _id: mongoose.Types.ObjectId(roomId),
        },
      },
      {
        $lookup: {
          from: "bookings",
          localField: "bookings",
          foreignField: "_id",
          as: "bookings",
        },
      },
      {
        $unwind: "$bookings",
      },
      {
        $match: {
          "bookings.createdAt": { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $month: "$bookings.createdAt",
          },
          income: { $sum: "$bookings.price" },
        },
      },
    ];

    const roomWithIncome = await Room.aggregate(pipeline);

    // Map month numbers to month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the current month and year
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const last6Months = [];
    for (let i = 5; i >= 0; i--) {
      const month = (currentMonth - i + 12) % 12;
      last6Months.push(month);
    }

    // Create an array with 0 total income for the last 6 months
    const resultData = last6Months.map((monthIndex) => {
      const monthData = roomWithIncome.find(
        (data) => data._id === monthIndex + 1
      );
      return {
        name: monthNames[monthIndex],
        Total: monthData ? monthData.income : 0,
      };
    });

    res.status(200).json({
      status: true,
      data: resultData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Data can't be fetched",
      error: error.message,
    });
  }
};
