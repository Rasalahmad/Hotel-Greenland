import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import moment from "moment";
import EditForm from "../new/EditForm";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../../components/Loader/Loader";

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
    cus_add1,
    cus_email,
    cus_phone,
    cus_city,
    cus_country,
    arrival,
    paymentStatus,
    request,
    status,
    desc,
    guests,
    roomName,
    price,
    bookingDates,
  } = data || {};

  console.log(bookingDates?.[0]);

  const lastIndex = bookingDates?.length && bookingDates?.length - 1;

  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          {!data || loading ? (
            <Loader type={"bookingDetails"} />
          ) : (
            <>
              <div className="top">
                <div className="leftSide">
                  <h1 className="title">Room Details</h1>
                  <div className="item">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/images/${product_img}`}
                      alt=""
                      className="bookingImg"
                    />
                    <div className="details bookingDeatils">
                      <h2 className="itemTitle">{roomName}</h2>
                      <div className="detailItem">
                        <span className="itemKey">Description :</span>
                        <span className="itemValue">{desc ? desc : ""}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Guest Allowed :</span>
                        <span className="itemValue">
                          {guests ? guests : ""}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Price :</span>
                        <span className="itemValue">
                          {" "}
                          ৳ {price} / per night
                        </span>
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
                      <div className="detailItem ">
                        <span className="itemKey">Descriptioin :</span>
                        <br />
                        <span className="itemValue">address: {cus_add1}</span>
                        <span
                          style={{
                            display: "flex",
                            gap: "2px",
                            justifyContent: "end",
                          }}
                          className="itemValue"
                        >
                          city: {cus_city}
                        </span>
                        <span className="itemValue">
                          country: {cus_country}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Guest Allowed :</span>
                        <span className="itemValue">{guests}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Email :</span>
                        <span className="itemValue">{cus_email}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Phone :</span>
                        <span className="itemValue">{cus_phone}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Payment :</span>
                        <span className="itemValue">{paymentStatus}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Arrival Time :</span>
                        <span className="itemValue">{arrival}</span>
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

                      <button className="button">Change Status</button>
                    </div>
                    <img src="/user.jpg" alt="" className="bookingImg" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
