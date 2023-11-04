import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import moment from "moment";
import EditForm from "../new/EditForm";
import CloseIcon from "@mui/icons-material/Close";

const Booking = () => {
  const { bookingId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(`/booking/individual/${bookingId}`);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [bookingId]);

  console.log(data);

  const [isActive, setIsActive] = useState(false);

  const {
    name,
    product_img,
    address,
    email,
    phone,
    city,
    arival,
    paymentMethod,
    request,
    status,
    desc,
    guests,
    roomName,
    price,
    paymentStatus,
    bookingDates,
  } = data || {};

  console.log(bookingDates?.[0]);

  const lastIndex = bookingDates?.length && bookingDates?.length - 1;

  if (!data || loading) {
    return <p>Loading.......</p>;
  }

  return (
    <>
      {!data || loading ? (
        <p>Loading...</p>
      ) : (
        <div className="single">
          <Sidebar />
          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="leftSide">
                <h1 className="title">Room Details</h1>
                <div className="item">
                  <img src={product_img} alt="" className="bookingImg" />
                  <div className="details bookingDeatils">
                    <h2 className="itemTitle">{roomName}</h2>
                    <div className="detailItem">
                      <span className="itemKey">Description :</span>
                      <span className="itemValue">{desc ? desc : ""}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Guest Allowed :</span>
                      <span className="itemValue">{guests ? guests : ""}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Price :</span>
                      <span className="itemValue"> ৳ {price} / per night</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Payment Status :</span>
                      <span
                        className="itemValue"
                        style={{
                          background:
                            paymentStatus === "Paid"
                              ? "lightgreen"
                              : "lightgray",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        {" "}
                        ৳ {paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top">
              <div className="leftSide">
                <h1 className="title">Guest Details</h1>
                <div className="item" style={{ gap: "100px" }}>
                  <div
                    className="details"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <h2 className="itemTitle">{name}</h2>
                    <div className="detailItem">
                      <span className="itemKey">Descriptioin :</span>
                      <span className="itemValue">{address}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Guest Allowed :</span>
                      <span className="itemValue">{city}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Email :</span>
                      <span className="itemValue">{email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone :</span>
                      <span className="itemValue">{phone}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Payment :</span>
                      <span className="itemValue">{paymentMethod}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Arrival Time :</span>
                      <span className="itemValue">{arival}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Request :</span>
                      <span className="itemValue">{request}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Booking Dates :</span>
                      <span className="itemValue">
                        {moment(bookingDates?.[0]).format("DD-MM-YYYY")}
                        {lastIndex > 0 &&
                          ` to ${moment(bookingDates[lastIndex * 1])?.format(
                            "DD-MM-YYYY"
                          )}`}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Status :</span>
                      <span className="itemValue">{status}</span>
                    </div>
                    <button className="button">Change Status</button>
                  </div>
                  <img
                    src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt=""
                    className="bookingImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
