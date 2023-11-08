/* eslint-disable no-use-before-define */
import React, { useContext, useState } from "react";
import { useGetUserBookingQuery } from "../../features/booking/bookingApi";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../component/Loader/Loader";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Rating from "react-rating-stars-component";
import User from "../../assets/icons/user.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import empty from "../../assets/images/emptybox.png";
const Orders = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const { data, isLoading, isError, error } = useGetUserBookingQuery(
    user?.email
  );
  const [review, setReview] = useState({});
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);
  const datahandler = (id) => {
    const singledata = data?.data.find((item) => item?._id === id);
    setReview(singledata);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const onSubmit = (data) => {
    const msg = data.message;
    const reviewData = {
      star: rating,
      image: user?.photoURl || "https://i.ibb.co/tpHnjp4/user.png",
      msg,
      name: user?.displayName,
      bookingId: review?._id,
      isApproved: false,
    };

    // Make the POST request by calling createReview with the reviewData
    axios
      .post("http://localhost:5000/api/review", reviewData)
      .then((res) => {
        if (res.data) {
          toast.success("Review created successfully:");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        // Handle the error here
      });
  };
  return (
    <div>
      {!data || isLoading ? (
        <>
          <Loader type={"booking"} />
        </>
      ) : (
        <>
          <div className="lg:ml-7 mx-3 lg:mx-auto my-10">
            {data?.data.length > 0 && (
              <Title>Booking Room: {data?.data?.length}</Title>
            )}
            {data?.data.length === 0 && (
              <div className="flex justify-center flex-col items-center gap-2">
                <img src={empty} alt="" className="w-24" />
                <Title>You have not booked any rooms yet</Title>
              </div>
            )}
            <div className="overflow-x-auto">
              {data?.data.length > 0 && (
                <table className="table   ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="">Booking Number</th>
                      <th>Transaction ID</th>
                      <th>Room Name</th>
                      <th>Arrival time</th>
                      <th>Booking dates</th>
                      <th>Payment Statusr</th>
                      <th>Total amount</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.map((item, i) => (
                      <tr key={item?._id} className=" card-bordered">
                        <th>{i + 1}</th>
                        <td>
                          <p>{item?.tran_id}</p>
                        </td>
                        <td>
                          <p>{item?.product_name}</p>
                        </td>
                        <td>{item?.arrival}</td>
                        <td>
                          <p>{item?.bookingDates[0]}</p>
                        </td>
                        <td>
                          <p>{item?.paymentStatus}</p>
                        </td>
                        <td>
                          <p>{item?.total_amount}</p>
                        </td>

                        <td>
                          {item?.paymentStatus === "Paid" ? (
                            <label
                              htmlFor="my_modal_6"
                              className="btn btn-outline"
                              onClick={() => datahandler(item?._id)}
                            >
                              Review
                            </label>
                          ) : (
                            <button disabled className="btn btn-outline">
                              Review
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {/* The button to open modal */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="modal-action">
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  X
                </label>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>
                    <span className="font-semibold">Room Name:</span>{" "}
                    {review?.product_name}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span>{" "}
                    {review?.total_amount}
                  </p>
                </div>
                <div>
                  {user?.photoURl ? (
                    <>
                      <img
                        class="h-16 w-16 rounded-full"
                        src={user?.photoURl}
                        alt=""
                      ></img>
                    </>
                  ) : (
                    <>
                      <img
                        class="h-16 w-16 rounded-full"
                        src={User}
                        alt=""
                      ></img>
                    </>
                  )}
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="sm:col-span-2">
                  <div class="mt-2.5">
                    <textarea
                      {...register("message")}
                      name="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                <div className="flex text-2xl mt-4 justify-center">
                  <Rating
                    count={5}
                    size={30}
                    activeColor="#ffd700"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </div>
                <div className="mt-6 flex justify-center items-center">
                  <button type="submit" className=" btn btn-outline  ">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
const Title = styled.div`
  font-size: 60px;
  font-family: "Great Vibes";
  text-align: center;
  margin-bottom: 20px;
`;
