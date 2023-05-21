import Restaurnt from "../models/restaurantModel.js";

export const addFood = async (req, res) => {
    const food = new Restaurnt (req.body);
    try {
        const result = await food.save();
        res.status(200).json({
          status: true,
          message: "Food added successfully",
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

    export const getFood = async (req, res) => {
        const food = await Restaurnt.find({});
        try {
          res.status(200).json({
            status: true,
            data: food,
          });
        } catch (error) {
          res.status(400).json({
            status: false,
            message: "Data can't fetch",
            error,
          });
        }
      };

      export const getSingleFood = async (req, res) => {
        const food = await Restaurnt.find({
          title: req.params.title,
        });
        try {
          res.status(200).json({
            status: true,
            data: food,
          });
        } catch (error) {
          res.status(400).json({
            status: false,
            message: "Data can't fetch",
            error,
          });
        }
      };

      export const updateRestaurant = async (req, res, next) => {
        console.log(req.body);
        try {
          const updated = await Restaurnt.findByIdAndUpdate(
            { _id: Object(req.params.id) },
            { $set: req.body },
            { new: true }
          );
          console.log(updated);
          res.status(200).json({
            status: true,
            message: "updated successfully",
            data: updated,
          });
        } catch (error) {
          res.status(500).json({
            status: false,
            message: " can't update",
            error,
          });
        }
      };