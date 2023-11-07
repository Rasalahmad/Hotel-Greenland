import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reviewColumn } from "../../datatablesource";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Loader from "../Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
const ReviewDataTable = () => {
  const [data, setData] = useState([]);
  const [singledata, setSingleData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  console.log(data);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleModal = (id) => {
    console.log(id);
    const onedata = data.find((item) => item?._id === id);
    setSingleData(onedata);
    console.log(onedata);
    setIsActive(!isActive);
  };

  const handlerUpdate = (id) => {
    console.log(id);
  };

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
              onClick={() => toggleModal(params.row._id)}
            >
              View
            </div>
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
    <div className="datatable">
      <div className="datatableTitle">Review List</div>
      {loading ? (
        <>
          <Loader type={"List"} />
        </>
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
      <div className={`modal ${isActive ? "active" : ""}`}>
        <div style={{ width: "600px" }} className="modal-content">
          <span className="close-button">
            <CloseIcon onClick={toggleModal}></CloseIcon>
          </span>
          {isActive && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={singledata.image}
                  alt=""
                />
                <div>
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "2px 5px",
                      borderRadius: "5px",
                      color: "darkblue",
                      border: " 1px dotted rgba(0, 0, 139, 0.596)",
                      cursor: "pointer",
                    }}
                    onClick={() => handlerUpdate(singledata?._id)}
                  >
                    <h4>
                      {singledata.isApproved === false ? "Pending" : "Approved"}
                    </h4>
                  </button>
                </div>
              </div>
              <div
                style={{
                  margin: "10px 0px 0 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <h4>Reviewer:</h4>
                <p>{singledata.name}</p>
              </div>
              <h4 style={{ margin: "10px 0px" }}>Rating: {singledata.star}</h4>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <h4>Booking ID:</h4>

                <span>{singledata.bookingId}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  margin: "10px 0px",
                }}
              >
                <h4>Comment:</h4>
                <span>{singledata.msg}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewDataTable;
