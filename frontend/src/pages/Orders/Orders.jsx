import React, { useContext } from "react";
import { useGetUserBookingQuery } from "../../features/booking/bookingApi";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../component/Loader/Loader";
import styled from "styled-components";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useGetUserBookingQuery(
    user?.email
  );
  console.log(data?.data);
  return (
    <div>
      {!data || isLoading ? (
        <>
          <Loader type={"booking"} />
        </>
      ) : (
        <>
          <div className="lg:ml-7 mx-3 lg:mx-auto my-10">
            <Title>Booking Room: {data?.data?.length}</Title>
            <div className="overflow-x-auto">
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
                          <button className="btn btn-outline">Review</button>
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
