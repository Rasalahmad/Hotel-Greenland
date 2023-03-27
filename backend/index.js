import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import roomsRoute from "./routers/roomsRoute.js";
import newsRoute from "./routers/newsRoute.js";
import restaurantRoute from "./routers/restaurantRoute.js";

const app = express();

// const corsOrigin = {
//   origin: "http://localhost:3000",
//   credentials: true,
//   optionSuccessStatus: 200,
// };
app.use(cors());

// database connection
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

app.post("/api/upload", upload.array("images"), (req, res) => {
  const file = req.files;
  res.status(200).json(file.filename);
});

// routing setup
app.use("/api/room", roomsRoute);
app.use("/api/news", newsRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server is Connected");
});
