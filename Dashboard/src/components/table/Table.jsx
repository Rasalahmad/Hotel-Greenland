import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ rows }) => {
  console.log(rows);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Transaction ID</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Phone Number</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row?.tran_id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/images/${row.product_img}`}
                    alt=""
                    className="image"
                  />
                  {row.product_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.cus_name}</TableCell>
              <TableCell className="tableCell">{row.bookingDates[0]}</TableCell>
              <TableCell className="tableCell"> ৳ {row.price}</TableCell>
              <TableCell className="tableCell">{row.cus_phone}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.paymentStatus}`}>
                  {row.paymentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
