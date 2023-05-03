import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { SslCommerzPayment } from "sslcommerz";
import roomsRoute from "./routers/roomsRoute.js";
import newsRoute from "./routers/newsRoute.js";
import restaurantRoute from "./routers/restaurantRoute.js";

const app = express();

const corsOrigin = {
  origin: [
    "http://localhost:3000",
    "http://www.hotelgreenlandbd.com",
    "http://admin.hotelgreenlandbd.com",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

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

// ----------- ssl commerz setup -------------
//sslcommerz init
app.post("/init", (req, res) => {
  const data = {
    total_amount: req?.body?.price,
    currency: "BDT",
    product_img: req?.body?.img,
    tran_id: "REF123",
    success_url: "http://hotelgreenlandbd.com/success",
    fail_url: "http://hotelgreenlandbd.com/fail",
    cancel_url: "http://hotelgreenlandbd.com/cancel",
    ipn_url: "http://hotelgreenlandbd.com/ipn",
    shipping_method: "Courier",
    product_name: req?.body?.productName,
    product_category: "Electronic",
    product_profile: "general",
    cus_name: req?.body?.name,
    cus_email: req?.body?.email,
    cus_add1: req.body?.city,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: req.body?.phone,
    cus_fax: req.body?.phone,
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  };
  const sslcommer = new SslCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASS,
    false
  ); //true for live default false for sandbox
  sslcommer
    .init(data)
    .then((data) => {
      //process the response that got from sslcommerz
      //https://developer.sslcommerz.com/doc/v4/#returned-parameters
      if (data.GatewayPageURL) {
        res.status(200).json(data.GatewayPageURL);
      }
      res.status(400).json("Payment seasson failed");
    })
    .catch((err) =>
      res.status(400).json({
        status: false,
        message: err,
      })
    );
});

app.post("/success", async (req, res) => {
  res.status(200).redirect(`${process.env.StoreRoute}/success`);
});

app.post("/fail", async (req, res) => {
  res.status(200).redirect(`${process.env.StoreRoute}/fail`);
});

app.post("/cancel", async (req, res) => {
  res.status(200).redirect(`${process.env.StoreRoute}/cancel`);
});

// --------- ssl commerz setup end -------------

// routing setup
app.use("/api/room", roomsRoute);
app.use("/api/news", newsRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server is Connected");
});
