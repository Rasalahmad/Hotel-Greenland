import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RoomForm = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});
  const [roomType, setRoomType] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const fileArray = Array.from(fileList);
    setSelectedFiles([...selectedFiles, ...fileArray]);
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      const res = await makeRequest.post("/upload/multiple", formData);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const thumbnail = await upload(file);
    const images = await uploadMultipleFile(selectedFiles);
    const data = { ...info, thumbnail, images, roomType };
    const res = await makeRequest.post("/room", data);
    if (res.data) {
      Swal.fire("Success", "Room Added successfully", "success");
      navigate("/");
    } else {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                `${process.env.REACT_APP_BASE_URL}/images/${file}`
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
                  Thumbnail: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
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
                          `${process.env.REACT_APP_BASE_URL}/images/${file}`
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                      <CloseIcon
                        className="crossIcon"
                        onClick={() => handleRemoveFile(index)}
                      />
                    </div>
                  ))}
              </div>
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomForm;
