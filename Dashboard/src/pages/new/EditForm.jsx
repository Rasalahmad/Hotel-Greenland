import "./new.scss";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";


const EditForm = ({ data,loading }) => {
  const {  _id, name, thumbnail, desc,  roomType,  weekPrice, guests, price, isAvailable} = data;


  const { register, handleSubmit} = useForm({
    name:data?.name,
    description:data?.desc,
    guests:data?.guests,
    roomType:data?.roomType,
    price:data?.weekPrice,
    roomPrice:data?.price,
    availability:data?.isAvailable,
  });

  const [file, setFile] = useState(null);

  const [selectedFiles, setSelectedFiles] = useState([]);

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

  // upload single file
  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await makeRequest.post("/upload/single", formData);
      return res.data;
    } catch (err) {
      Swal.fire("Error", "Can't upload this image", "error");
    }
  };

  // upload single file
  const uploadMultipleFile = async (files) => {
    console.log(files);
    try {
      const formData = new FormData();
      console.log(formData);
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      const res = await makeRequest.post("/upload/multiple", formData);
      console.log(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    const image = await upload(file);
    const images = await uploadMultipleFile(selectedFiles);
    const data = {
       e,
      image,
      images,
    };
    console.log(data);
    const res = await makeRequest.post(`/room/${_id}`, data);
    if (res.data) {
      Swal.fire("Success", "Room Added successfully", "success");
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{name}</h1>
        </div>
        <div className=" bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : thumbnail} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label htmlFor="file">
                  Thumbnail: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  Value={thumbnail}
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={name}
                  {...register("name")}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  id="description"
                  Value={desc}
                  {...register("description", {
                  })}
                />
              </div>
              <div className="formInput">
                <label>Room Type</label>
                <input
                  type="text"
                  id="roomType"
                  Value={roomType}
                  {...register("roomType", {
                  })}
                />
              </div>
              <div className="formInput">
                <label>Week Price</label>
                <input
                  type="number"
                  id="weekPrice"
                  Value={weekPrice}
                  {...register("weekPrice", {
                  })}
                />
              </div>
              <div className="formInput">
                <label>Number Of Guests</label>
                <input
                  type="number"
                  id="guests"
                  Value={guests}
                  {...register("guests")}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  id="price"
                  Value={price}
                  {...register("price")}
                />
              </div>
              <div className="formInput">
                <label>Availability</label>
                <input
                  type="text"
                  id="availability"
                  Value={isAvailable}
                  {...register("availability")}
                />
              </div>

              <div className="formInput">
                <label htmlFor="m_file">
                  Images: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="m_file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  multiple={true}
                />
              </div>
              <div className="images">
                {selectedFiles &&
                  selectedFiles.map((file, index) => (
                    <div key={index} className="container">
                      <img
                        src={
                        
                             URL.createObjectURL(file)
                           
                        }
                        alt=""
                      />
                      <CloseIcon
                        className="crossIcon"
                        onClick={() => handleRemoveFile(index)}
                      />
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
