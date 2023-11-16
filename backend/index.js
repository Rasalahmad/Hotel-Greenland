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
  conslole.log(file);
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

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server is Connected");
});
