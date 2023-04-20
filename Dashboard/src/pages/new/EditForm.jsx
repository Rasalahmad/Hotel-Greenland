import "./new.scss";
import React, { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";

const EditForm = ({ data, loading }) => {
  console.log(data?.name);
  const [name, setName] = useState(data?.name ?? "");
  const [desc, setDesc] = useState(data?.desc) ?? "";
  const [roomType, setRoomType] = useState(data?.roomType) ?? "";
  const [weekPrice, setWeekPrice] = useState(data?.weekPrice) ?? "";
  const [guests, setGuests] = useState(data?.guests) ?? "";
  const [price, setPrice] = useState(data?.price) ?? "";
  const [isAvailable, setIsAvailability] = useState(data?.isAvailable) ?? "";

  console.log(name, desc, roomType, weekPrice, guests, price);

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log(data);
    // const res = await makeRequest.post(`/room/${_id}`, data);
    // if (res.data) {
    //   Swal.fire("Success", "Room Added successfully", "success");
    // } else {
    //   Swal.fire("Error", "Something went wrong", "error");
    // }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{data?.name}</h1>
        </div>
        <div className=" bottom">
          <div className="left">
            <img src={data?.thumbnail} alt="" />
          </div>
          <div className="right">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formInput">
                <label htmlFor="thumbnail">
                  Thumbnail: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  style={{ display: "none" }}
                  disabled
                />
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  id="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Room Type</label>
                <input
                  type="text"
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Week Price</label>
                <input
                  type="number"
                  id="weekPrice"
                  value={weekPrice}
                  onChange={(e) => setWeekPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Number Of Guests</label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Availability</label>
                <input
                  type="text"
                  id="availability"
                  value={isAvailable}
                  onChange={(e) => setIsAvailability(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label htmlFor="images">
                  Images: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  style={{ display: "none" }}
                  multiple={true}
                  disabled
                />
              </div>
              <div className="images">
                {data?.images &&
                  data?.images.map((file, index) => (
                    <div key={index} className="container">
                      <img src={file?.original} alt="" />
                    </div>
                  ))}
                {/* {
                    images.map((item,index)=>(
                    <div key={index} className="container">
                       <img
                    src={
                      item?.original
                    }
                    alt=""
                  />
                   <CloseIcon
                        className="crossIcon"
                        onClick={() => handleRemoveFile(index)}
                        />
                  </div>
                  ))
                } */}
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
