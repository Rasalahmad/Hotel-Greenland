import React, { useState } from "react";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
const DishesForm = ({ data }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [tag, setTag] = useState();
  const [file, setFile] = useState({});

  // upload single file
  const upload = async (file) => {
    try {
      if (typeof file !== "string") {
        const formData = new FormData();
        formData.append("image", file);
        const res = await makeRequest.post("/upload/single", formData);
        return res.data;
      }
    } catch (err) {
      Swal.fire("Error", "Can't upload this image", "error");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const img = await upload(file);
    const _data = {
      title: title,
      dish_tag: tag,
      img: img,
      price: price,
    };
    console.log(_data);
    const res = await makeRequest.post(`/restaurant/${data?._id}`, _data);
    if (res.data) {
      Swal.fire("Success", "restaurant Update successfully", "success");
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };
  return (
    <div>
      <div className="left">
        <img src={file} alt="" />
      </div>

      <div style={{ marginTop: "20px" }} className="reataurantForm">
        <div>
          <div className="flex">
            <img
              style={{ width: "80px" }}
              src="https://www.transparentpng.com/thumb/food/n0nASj-food-plate-cut-out.png"
              alt=""
            />
            <h1 className="menu">Dish </h1>
          </div>
          {/* <div className="left">
            <img
              src={
                file
                  ? typeof file === "string"
                    ? `${process.env.REACT_APP_IMAGE_URL}/images/${file}`
                    : URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <form onSubmit={onSubmit} className="form">
            <div className="formInput">
              <label htmlFor="img">
                Dish Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="img"
                placeholder={file}
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            <div className="formInput">
              <label> Title :</label>
              <input
                type="text"
                id="title"
                placeholder="Set Dish Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="formInput">
              <label>Dish Tag:</label>
              <input
                type="text"
                id="dish_tag"
                placeholder="Chicken / Grapes / Pizza / Cheese / Herbs"
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Price:</label>
              <input
                type="number"
                id="Price"
                placeholder="205"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button type="submit">Add Dish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishesForm;
