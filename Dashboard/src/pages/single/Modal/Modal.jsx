// Modal.jsx

import React, { useState } from "react";
import "./Modal.scss";
import CloseIcon from "@mui/icons-material/Close";
function Modal({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button onClick={toggleModal} className="editButton">
        Edit
      </button>
      <div className={`modal ${isActive ? "active" : ""}`}>
        <div className="modal-content">
          <span className="close-button">
            <CloseIcon onClick={toggleModal}></CloseIcon>
          </span>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
