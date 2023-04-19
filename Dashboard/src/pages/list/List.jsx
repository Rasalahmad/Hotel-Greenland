import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useLocation } from "react-router-dom";
import TransactionDataTable from "../../components/datatable/TransactionDataTable";
import HotelDataTable from "../../components/datatable/HotelDataTable";

const List = () => {
  const location = useLocation();

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {location?.pathname === "/hotels" ? (
          <HotelDataTable />
        ) : location?.pathname === "/transaction" ? (
          <TransactionDataTable />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default List;
