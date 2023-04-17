import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { makeRequest } from "../../axios";

const CommitteeDataTable = () => {
  const trans_data = [
    {
      id: 1,
      transId: "SDFSDFSDFFD15334353",
      name: "Rasel Ahmad",
      profile:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      price: 1200,
      roomName: "Single Room - 101",
      date: "20-04-2023 - 21-04-2023",
      checkInTime: "6 am",
    },
    {
      id: 2,
      transId: "SDFSDFSDFFD153331321",
      name: "Ayon Barua",
      profile:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      price: 1200,
      roomName: "Single Room - 102",
      date: "21-04-2023 - 22-04-2023",
      checkInTime: "6 am",
    },
    {
      id: 3,
      transId: "SDFSDFSDFFD153343145",
      name: "Talimul",
      profile:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      price: 1200,
      roomName: "Single Room - 104",
      date: "20-04-2023 - 21-04-2023",
      checkInTime: "6 am",
    },
  ];

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await makeRequest.get("/committee");
  //       setData(res.data.data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          makeRequest.delete(`/committee/${id}`);
          setData(data.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (err) {
          setError(err);
        }
      }
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/committee/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      {!trans_data ? (
        "Loading"
      ) : (
        <div className="datatable">
          <div className="datatableTitle">
            Transactions
            <Link to={`/committee/committeeForm`} className="link">
              Add New
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={trans_data}
            columns={transColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(rows) => rows.id}
          />
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};

export default CommitteeDataTable;
