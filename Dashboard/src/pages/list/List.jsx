import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import TransactionDataTable from "../../components/datatable/TransactionDataTable";
import HotelDataTable from "../../components/datatable/HotelDataTable";
import RestaurantData from "../../components/datatable/RestaurantData";
import ReviewDataTable from "../../components/datatable/ReviewDataTable";
import NewsBlogDataTable from "../../components/datatable/NewsBlogDataTable";

const List = () => {
  const location = useLocation();

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {location?.pathname === "/hotels" ? (
          <HotelDataTable />
        ) : location?.pathname === "/restaurant" ? (
          <RestaurantData />
        ) : location?.pathname === "/booking" ? (
          <TransactionDataTable />
        ) : location?.pathname === "/reviews" ? (
          <ReviewDataTable />
        ) : location?.pathname === "/newsAndBlog" ? (
          <NewsBlogDataTable />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default List;
