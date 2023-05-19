import React, { useState } from "react";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
const DishesForm = ({ data }) => {
  const [price, setPrice] = useState();
  const [file, setFile] = useState({});

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
    
  };
  return (
    <div>
      <div className="left">
        <img src={file} alt="" />
      </div>
      {data?.dishes?.map((item, i) => (
        <div style={{ marginTop: "20px" }} className="reataurantForm">
          {i == 1 && (
            <div key={item?._id}>
              <div className="flex">
                <img
                  style={{ width: "80px" }}
                  src="https://www.transparentpng.com/thumb/food/n0nASj-food-plate-cut-out.png"
                  alt=""
                />
                <h1 className="menu">Dish </h1>
              </div>

              <form onSubmit={onSubmit} className="form">
                <div className="formInput">
                  <label htmlFor="thumbnail">
                    Dish Image:{" "}
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="img"
                    placeholder={item?.img}
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
                    onChange={(e) => e.target.value}
                  />
                </div>
               
                  <div className="formInput">
                    <label>Dish Tag:</label>
                    <input
                      type="text"
                      id="dish_tag"
                      placeholder={item?.dish_tag}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div className="formInput">
                    <label>Price:</label>
                    <input
                      type="text"
                      id="Price"
                      placeholder={item?.price}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                
             
                <button type="submit">Update</button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DishesForm;
