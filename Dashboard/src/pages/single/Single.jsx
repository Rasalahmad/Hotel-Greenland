import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Modal from "./Modal/Modal";
import EditForm from "../new/EditForm";
// import "./Modal.scss";
import CloseIcon from "@mui/icons-material/Close";

const Single = () => {
  const { roomId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(`/room/getRoom/${roomId}`);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [roomId]);

  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(`/room/transaction/${roomId}`);
        setStats(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [roomId]);

  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  if (!data) {
    return <p>Loading.......</p>;
  }
  const { name, thumbnail, roomType, guests, price, isAvailable } = data;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
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
                  {isActive && (
                    <EditForm
                      loading={loading}
                      data={data}
                      setIsActive={setIsActive}
                    />
                  )}
                </div>
              </div>
            </>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={thumbnail} alt="" className="itemImg" />
              <div className="details">
                <h2 className="itemTitle">{name}</h2>
                <div className="detailItem">
                  <span className="itemKey">Room Type :</span>
                  <span className="itemValue">
                    {roomType?.charAt(0)?.toUpperCase() + roomType?.slice(1)}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Guest Allowed :</span>
                  <span className="itemValue">{guests}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price :</span>
                  <span className="itemValue">{price} / per night</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Availability :</span>
                  <span className={`itemValue ${isAvailable}`}>
                    {isAvailable}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              data={stats}
              aspect={3 / 1}
              title="Earming ( Last 6 Months)"
            />
          </div>
        </div>
        {data?.bookings?.length > 0 && (
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List rows={data?.bookings} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Single;
