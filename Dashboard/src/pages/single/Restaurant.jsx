/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import EditForm from "../new/EditForm";
import CloseIcon from "@mui/icons-material/Close";

const Restaurant = () => {
  const { restaurantTitle } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(`/restaurant/${restaurantTitle}`);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [restaurantTitle]);

  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };
  console.log(data);
  if (!data) {
    return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <p>Loading.......</p>;
        </div>
      </div>
    );
  } else {
    return (
      <div className="restaurant">
        <Sidebar />
        <div className="restaurantContainer">
          <Navbar />
          {data.map((item) => (
            // console.log(item?.tiny_title)
            <div key={item?._id} className="top">
              <div className="leftSide">
                <>
                  <button onClick={toggleModal} className="editButton">
                    Edit
                  </button>
                  <div className={`modal ${isActive ? "active" : ""}`}>
                    <div className="modal-content">
                      <span className="close-button">
                        <CloseIcon onClick={toggleModal}></CloseIcon>
                      </span>
                      {isActive && <EditForm loading={loading} data={data} />}
                    </div>
                  </div>
                </>
                <div className="details">
                  <div style={{ marginBottom: "20px" }}>
                    <img
                      src="https://www.transparentpng.com/thumb/food/n0nASj-food-plate-cut-out.png"
                      style={{ width: "250px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="itemKey">Menu Title :</span>
                    <span className="itemValue">{item?.title}</span>
                    {item?.title}
                    <p>
                      <span className="itemKey">Tiny Title :</span>
                      <span className="itemValue">{item?.tiny_title}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="">
                  <button className="link">Add New Dish</button>
                </div>
                {item?.dishes.map((vol) => (
                  <div className="dish">
                    <div >
                      <img
                        src={vol?.img}
                        className="dishImg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>Blue Cheese Crackers with Grapes</h2>
                      <div className="tagPrice">
                        <p>{vol?.dish_tag}</p>
                        <p><span className="price">Price: </span>{vol?.price} ৳</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Restaurant;
