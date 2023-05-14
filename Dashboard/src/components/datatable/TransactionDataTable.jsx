import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { makeRequest } from "../../axios";

const TransactionDataTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get("/booking");
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

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
  const handleStatusChange = (e, id) => {
    e.preventDefault();
    // update the status in db
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/booking/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
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
      {!data ? (
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
            rows={data}
            columns={transColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(rows) => rows._id}
            disableSelectionOnClick={true}
          />
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};

export default TransactionDataTable;
