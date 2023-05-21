import React, { useState } from "react";
import "./new.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
const RestaurantForm = ({ data,toggleModal }) => {
  const [title, setTitle] = useState(data?.title ?? "");
  const [tiny_title, setTiny_title] = useState(data?.tiny_title) ?? "";
  const [price, setPrice] = useState(data?.price) ?? "";
  const [file, setFile] = useState(data?.img ?? {});
  const onSubmit = async (e) => {
    e.preventDefault();
    const _data={
        title:title,
        tiny_title:tiny_title,
      }
        console.log(_data);
        const res = await makeRequest.put(`/restaurant/${data?._id}`, _data);
    if (res.data) {
      Swal.fire("Success", "Update successfully", "success");
      toggleModal()

    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
    // {title: 'Start', tiny_title: 'Beginning'}

  };
 
  return (
    <div style={{ marginTop: "20px" }} className="reataurantForm">
      {
        <div key={data?._id}>
         <div className="flex">
          <img style={{width:"80px"}} src="https://www.transparentpng.com/thumb/food/n0nASj-food-plate-cut-out.png" alt="" />
         <h1 className="menu">Menu</h1>
         </div>
          <form onSubmit={onSubmit} className="form">
            <div className="formInput">
              <label> Title :</label>
              <input
                type="text"
                id="title"
                defaultValue={data?.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Tiny Title :</label>
              <input
                type="text"
                id="tiny_title"
                defaultValue={data?.tiny_title}
                onChange={(e) => setTiny_title(e.target.value)}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      }
    </div>
  );
};

export default RestaurantForm;
