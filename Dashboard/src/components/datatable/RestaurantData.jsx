import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { makeRequest } from "../../axios";
import Loader from "../Loader/Loader";
const RestaurantData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get("/restaurant");
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);
  const columns = [
    { field: "_id", headerName: "ID", width: 160 },
    {
      field: "title",
      headerName: "Menu Title",
      width: 150,
      editable: true,
    },
    {
      field: "tiny_title",
      headerName: "Tiny_Title",
      width: 150,
      editable: true,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/restaurant/${params.row.title}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  const getRowId = (row) => row._id;

  return (
    <>
      {!data || loading ? (
        <Loader type={"List"} />
      ) : (
        <div>
          <div className="datatable" style={{ width: "96%" }}>
            <p className="datatableTitle">Restaurant</p>
            <DataGrid
              rows={data}
              getRowId={getRowId}
              columns={columns.concat(actionColumn)}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </div>
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};

export default RestaurantData;
