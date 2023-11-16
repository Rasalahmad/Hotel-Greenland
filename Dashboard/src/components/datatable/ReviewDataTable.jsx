import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reviewColumn } from "../../datatablesource";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Loader from "../Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

const ReviewDataTable = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete  review",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await makeRequest.delete(`/review/${id}`);
          setData(data.filter((item) => item._id !== id));
          Swal.fire("Updated", "Deleted Successfully", "success");
        } catch (err) {
          Swal.fire("Failed", "Fail to delete", "error");
        }
      }
    });
  };

  const toggleModal = (id) => {
    const singleItem = data.find((item) => item?._id === id);
    setSingleData(singleItem);
    setIsActive(!isActive);
  };

  const handleApproval = (id, approveStatus) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update approval",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await makeRequest.patch(`/review/${id}`, {
            isApproved: approveStatus,
          });
          if (res.data.data) {
            setData([...data.filter((item) => item._id !== id), res.data.data]);
            Swal.fire("Updated", "Approved Successfully", "success");
            setIsActive(false);
          }
        } catch (err) {
          console.log(err);
          Swal.fire("Failed", "Fail to update approval", "error");
        }
      }
    });
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
      {loading ? (
        <>
          <Loader type={"List"} />
        </>
      ) : (
        <>
          <div className="datatableTitle">Review List</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={reviewColumn.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(rows) => rows._id}
            disableSelectionOnClick
          />
        </>
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
                  src={singleData?.image}
                  alt=""
                />
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
                <p>{singleData?.name}</p>
              </div>
              <h4 style={{ margin: "10px 0px" }}>Rating: {singleData?.star}</h4>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <h4>Booking ID:</h4>

                <span>{singleData?.bookingId}</span>
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
                <span>{singleData?.msg}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  margin: "10px 0px",
                }}
              >
                <h4>Approval:</h4>
                <span>
                  {singleData?.isApproved === false ? "Pending" : "Approved"}
                </span>
              </div>
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
                  onClick={() =>
                    handleApproval(singleData?._id, !singleData.isApproved)
                  }
                >
                  <h4>
                    {singleData.isApproved === false ? "Approve" : "Discard"}
                  </h4>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewDataTable;
