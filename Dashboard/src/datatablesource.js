export const userColumns = [
  {
    field: "thumbnail",
    headerName: "ROOM",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={`${process.env.REACT_APP_IMAGE_URL}/images/${params.row.thumbnail}`}
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "guests", headerName: "GUESTS", width: 200 },
  {
    field: "price",
    headerName: "PRICE",
    width: 150,
  },

  {
    field: "weekPrice",
    headerName: "WEEKLY PRICE",
    width: 200,
  },
  {
    field: "isAvailable",
    headerName: "AVAILABILITY",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isAvailable}`}>
          {params.row.isAvailable}
        </div>
      );
    },
  },
];
export const reviewColumn = [
  {
    field: "thumbnail",
    headerName: "ROOM",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "msg", headerName: "Message", width: 200 },
  {
    field: "star",
    headerName: "STAR",
    width: 150,
  },

  {
    field: "isApproved",
    headerName: "APPROVAL",
    width: 200,
  },
];

export const transColumns = [
  // { field: "transId", headerName: "Transaction ID", width: 200 },
  {
    field: "product_name",
    headerName: "Room",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={`${process.env.REACT_APP_IMAGE_URL}/images/${params.row.product_img}`}
            alt="avatar"
          />
          {params.row.product_name}
        </div>
      );
    },
  },
  { field: "price", headerName: "Amount", width: 100 },
  {
    field: "cus_name",
    headerName: "Customer",
    width: 150,
  },
  {
    field: "cus_email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "cus_phone",
    headerName: "Mobile No.",
    width: 150,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 100,
  },
];
