import "./new.scss";
import React, { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";

const EditForm = ({ data, loading, setIsActive }) => {
  const [name, setName] = useState(data?.name ?? "");
  const [desc, setDesc] = useState(data?.desc) ?? "";
  const [roomType, setRoomType] = useState(data?.roomType) ?? "";
  const [weekPrice, setWeekPrice] = useState(data?.weekPrice) ?? "";
  const [guests, setGuests] = useState(data?.guests) ?? "";
  const [price, setPrice] = useState(data?.price) ?? "";
  const [isAvailable, setIsAvailability] = useState(data?.isAvailable) ?? "";
  const [file, setFile] = useState(data?.thumbnail ?? {});
  const [selectedFiles, setSelectedFiles] = useState(data?.images);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const fileArray = Array.from(fileList);
    setSelectedFiles([...selectedFiles, ...fileArray]);
  };

  // remove selected image
  const handleRemoveFile = (indexToRemove) => {
    const updatedFiles = selectedFiles.filter(
      (file, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);
  };

  const dbImages = selectedFiles.filter((item) => {
    return (
      item.original && {
        original: item.original,
        thumbnail: item.thumbnail,
        _id: item._id,
      }
    );
  });

  console.log(dbImages);

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

  // upload single file
  const uploadMultipleFile = async (files) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        if (!files[i]?.original) {
          formData.append("images", files[i]);
        }
      }
      const res = await makeRequest.post("/upload/multiple", formData);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const thumbnail = await upload(file);
    const images = await uploadMultipleFile(selectedFiles);
    const _data = {
      nmae: name,
      desc: desc,
      roomType: roomType,
      weekPrice: weekPrice,
      guests: guests,
      price: price,
      isAvailable: isAvailable,
      thumbnail: thumbnail ? thumbnail : data?.thumbnail,
      images: images ? [...dbImages, ...images] : data.images,
    };
    const res = await makeRequest.put(`/room/${data?._id}`, _data);
    if (res.data) {
      Swal.fire("Success", "Room Update successfully", "success");
      setIsActive(false);
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{data?.name}</h1>
        </div>
        <div className=" bottom">
          <div className="left">
            <img
              src={
                file
                  ? typeof file === "string"
                    ? file
                    : URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={onSubmit}>
              <div className="formInput">
                <label htmlFor="thumbnail">
                  Thumbnail: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
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
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="single room">Single</option>
                  <option value="double room">Double</option>
                  <option value="special room">Special</option>
                </select>
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
                <select
                  id="availability"
                  value={isAvailable}
                  onChange={(e) => setIsAvailability(e.target.value)}
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <div className="formInput">
                <label htmlFor="images">
                  Images: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="images"
                  style={{ display: "none" }}
                  multiple={true}
                  onChange={handleFileChange}
                />
              </div>
              <div className="images">
                {selectedFiles &&
                  selectedFiles.map((file, index) => {
                    return (
                      <div key={index} className="container">
                        <img
                          src={
                            file
                              ? file?.original
                                ? `${process.env.REACT_APP_BASE_URL}/images/${file.original}`
                                : URL.createObjectURL(file)
                              : `${process.env.REACT_APP_BASE_URL}/images/${file.original}`
                          }
                          alt=""
                        />
                        <CloseIcon
                          className="crossIcon"
                          onClick={() => handleRemoveFile(index)}
                        />
                      </div>
                    );
                  })}
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
