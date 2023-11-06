import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reviewColumn } from "../../datatablesource";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";

const ReviewDataTable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get("/review");
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              // onClick={() => handleSingleItem(params.row._id)}
            >
              View
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Review List</div>
      {loading ? (
        "Loading..."
      ) : (
        <DataGrid
          className="datagrid"
          rows={data}
          columns={reviewColumn.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(rows) => rows._id}
        />
      )}
    </div>
  );
};

export default ReviewDataTable;
