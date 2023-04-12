import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";

const RoomForm = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);

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
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      Swal.fire("Error", "Can't upload this image", "error");
    }
  };

  // upload single file
  const uploadMultipleFile = async (files) => {
    try {
      const formData = new FormData();
      formData.append("files", files);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      Swal.fire("Error", "Can't upload this image", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = await upload(file);
    const images = await uploadMultipleFile(selectedFiles);
    const data = { ...info, image, images };
    // const res = await makeRequest.post("/faculty", data);
    // if (res.data) {
    //   Swal.fire(
    //     "Success",
    //     "The Committee Member Added successfully",
    //     "success"
    //   );
    // } else {
    //   Swal.fire("Error", "Something went wrong", "error");
    // }
    console.log(data);
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
                  Thumbnail: <DriveFolderUploadOutlinedIcon className="icon" />
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
                          file
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