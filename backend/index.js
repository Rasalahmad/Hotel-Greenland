import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import roomsRoute from "./routers/roomsRoute.js";
import newsRoute from "./routers/newsRoute.js";
import restaurantRoute from "./routers/restaurantRoute.js";
import bookingRoute from "./routers/bookingRoute.js";
import emailRoute from "./routers/emailRoute.js";
import downloadRoute from "./routers/downloadRoute.js";
import reviewRoute from "./routers/reviewRoute.js";
import statisticRoute from "./routers/statisticRoute.js";
import sliderRoute from "./routers/sliderRoute.js";
import cron from "node-cron";
import Booking from "./models/bookingModel.js";
import Room from "./models/roomsModel.js";

const app = express();

const corsOrigin = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://www.admin.hotelgreenlandbd.com",
    "https://admin.hotelgreenlandbd.com",
    "https://bban.hotelgreenlandbd.com",
    "https://www.bban.hotelgreenlandbd.com",
    "http://www.hotelgreenlandbd.com",
    "http://hotelgreenlandbd.com",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

// database connection`
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// access static file
app.use(express.static("upload"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("Running");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload/single", upload.single("image"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/upload/multiple", upload.array("images", 5), (req, res) => {
  const file = req.files;
  let images = [];
  file.map((f) => {
    images.push({ original: f.filename, thumbnail: f.filename });
  });
  return res.status(200).json(images);
});

// routing setup
app.use("/api/room", roomsRoute);
app.use("/api/news", newsRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/sendEmail", emailRoute);
app.use("/api/download-pdf", downloadRoute);
app.use("/api/review", reviewRoute);
app.use("/api/statistic", statisticRoute);
app.use("/api/slider", sliderRoute);

cron.schedule("0 11 * * *", async () => {
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  try {
    const bookings = await Booking.find(); // Fetch all bookings

    for (const booking of bookings) {
      const { bookingDates, product_name } = booking;

      const lastBookingDate = bookingDates[bookingDates.length - 1];
      const firstBookingDate = bookingDates[0];
      if (bookingDates.includes(formattedToday)) {
        // Today is within the booking dates, mark the room as "Unavailable"
        const resp = await Room.find({
          name: product_name,
        });
        const res = await Room.updateOne(
          { name: product_name },
          { $set: { isAvailable: "Unavailable" } }
        );
        console.log(
          `Room ${product_name} marked as "Unavailable" for ${today}.`
        );
      } else if (new Date(today) > new Date(lastBookingDate)) {
        // If today's date is after the last booking date, mark the room as "Available"
        await Room.updateOne(
          { name: product_name },
          { $set: { isAvailable: "Available" } }
        );
        console.log(`Room ${product_name} marked as "Available".`);
      } else if (new Date(today) < new Date(firstBookingDate)) {
        console.log(
          `Room ${product_name} booking dates are in the future. No update.`
        );
      }
    }
  } catch (error) {
    console.error("Error updating room availability:", error);
  }
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server is Connected");
});
