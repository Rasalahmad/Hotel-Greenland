import React, { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { galleryColumn } from "../../datatablesource";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const GalleryTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await makeRequest.get("/slider");
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
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
          makeRequest.delete(`/slider/${id}`);
          setData(data.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Room has been Deleted.", "success");
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
    <div>
      <div>
        <>
          {!data || loading ? (
            <Loader type={"List"} />
          ) : (
            <div className="datatable">
              <div className="datatableTitle">
                Gallery
                <Link to={`/gallery/galleryForm`} className="link">
                  Add Image
                </Link>
              </div>
              <DataGrid
                className="datagrid"
                rows={data}
                columns={galleryColumn.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(rows) => rows._id}
              />
              {error && <p>{error}</p>}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default GalleryTable;
