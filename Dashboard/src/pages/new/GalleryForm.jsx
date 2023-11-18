import React, { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
const GalleryForm = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // remove selected image

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = await upload(file);
    const data = { ...info, image };
    console.log(data);
    const res = await makeRequest.post("/news", data);
    if (res.data) {
      Swal.fire("Success", "Image Added successfully", "success");
      navigate("/gallery");
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };
  return (
    <div>
      <div>
        <div className="new">
          <Sidebar />
          <div className="newContainer">
            <Navbar />
            <div className="top">
              <h1>{title}</h1>
            </div>
            <div className="bottom">
              <div className="leftnews">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>

                  {inputs.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        id={input.id}
                        placeholder={input.placeholder}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  <button onClick={handleSubmit}>Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
