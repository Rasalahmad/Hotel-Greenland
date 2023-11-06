export const userColumns = [
  {
    field: "thumbnail",
    headerName: "ROOM",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.thumbnail} alt="avatar" />
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
          <img className="cellImg" src={params.row.product_img} alt="avatar" />
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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
