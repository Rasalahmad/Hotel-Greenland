import PDFDocument from "pdfkit";
import moment from "moment";

export const downloadPdf = async (req, res) => {
  const lastIndex = req?.body?.bookingDates?.length - 1;
  const doc = new PDFDocument();
  const dynamicText = `Room Name: ${req.body.roomName}
   \nTotal: ${req.body.price} 
   \nPayment Type: Cash
  \nPayment Status : ${req.body.paymentStatus} 
  \nBooking Dates: ${moment(req.body.bookingDates[0]).format("DD-MM-YYYY")} ${
    lastIndex > 0
      ? `to ${moment(bookingDates[lastIndex * 1]).format("DD-MM-YYYY")}`
      : ""
  }`;
  doc
    .fontSize(26)
    .fillColor("green")
    .text("Booking Document", { align: "center" });
  doc
    .fontSize(12)
    .fillColor("green")
    .text("Welcome to Hotel Greenland", { align: "center" });
  doc.moveDown();
  doc.moveDown();
  doc.fontSize(16).fillColor("black").text(dynamicText, { align: "center" });
  res.setHeader("Content-disposition", "attachment; filename=booking.pdf");
  res.setHeader("Content-type", "application/pdf");
  doc.pipe(res);
  doc.end();
};
