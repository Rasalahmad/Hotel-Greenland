import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get("/statistic/widget");
        setBookingData(res.data.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [loading2, setLoading2] = useState(false);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading2(true);
      try {
        const res = await makeRequest.get("/statistic/bookingTransaction");
        setTransaction(res.data.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      setLoading2(false);
    };
    fetchData();
  }, []);

  const [loading3, setLoading3] = useState(false);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading2(true);
      try {
        const res = await makeRequest.get(`/booking?limit=${5}`);
        setBooking(res.data.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
      setLoading2(false);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          {bookingData && !loading && (
            <Widget type="order" statistic={bookingData?.bookingStatistic} />
          )}
          {bookingData && !loading && (
            <Widget type="earning" statistic={bookingData?.earnings} />
          )}
          {bookingData && !loading && (
            <Widget type="balance" statistic={bookingData?.earnings} />
          )}
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart
            title="Last 12 Months Booking"
            aspect={3 / 1}
            data={transaction}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table rows={booking} />
        </div>
      </div>
    </div>
  );
};

export default Home;
