import PDFDocument from "pdfkit";
import moment from "moment";
import fs from "fs";
import path from "path";

export const downloadPdf = async (req, res) => {
  try {
    const { roomName, price, paymentStatus, bookingDates } = req.body;

    // Ensure bookingDates exists and is an array
    const isValidDates = Array.isArray(bookingDates) && bookingDates.length > 0;
    const firstDate = isValidDates
      ? moment(bookingDates[0]).format("DD-MM-YYYY")
      : "N/A";
    const lastIndex = isValidDates ? bookingDates.length - 1 : 0;
    const lastDate =
      lastIndex > 0 ? moment(bookingDates[lastIndex]).format("DD-MM-YYYY") : "";

    const doc = new PDFDocument({
      margin: 50,
      size: "A4",
      bufferPages: true, // Enable buffer pages for footer
    });

    // Set Headers for PDF Download
    res.setHeader("Content-disposition", "attachment; filename=booking.pdf");
    res.setHeader("Content-type", "application/pdf");

    // Stream the PDF to response
    doc.pipe(res);

    // Add decorative header background
    doc.rect(0, 0, doc.page.width, 150).fill("#2c3e50");

    // ** Add Logo (if exists) **
    const logoPath = path.resolve("public/logo.png");
    if (fs.existsSync(logoPath)) {
      const logoWidth = 120;
      const centerX = (doc.page.width - logoWidth) / 2;
      doc.image(logoPath, centerX, 30, { width: logoWidth });
      doc.moveDown(2);
    }

    // ** Header Section **
    doc
      .fontSize(24)
      .fillColor("#ffffff")
      .text("Hotel Greenland", { align: "center" })
      .fontSize(12)
      .text("123 Green Street, Greenland", { align: "center" })
      .moveDown(5);

    // ** Title Section with decorative elements **
    doc
      .fillColor("#2c3e50")
      .fontSize(30)
      .text("Booking Confirmation", { align: "center" })
      .moveDown(0.5);

    // ** Subtitle with style **
    doc
      .fontSize(16)
      .fillColor("#7f8c8d")
      .text("Thank you for choosing luxury!", { align: "center" })
      .moveDown(2);

    // ** Booking Details Section **
    doc
      .fontSize(20)
      .fillColor("#2c3e50")
      .text("Booking Details", { align: "left" })
      .moveDown(1);

    // Enhanced table styling
    const tableTop = doc.y;
    const tableLeft = 50;
    const columnWidth = 250;
    const rowHeight = 30;
    const cellPadding = 8;

    // Table Headers with gradient-like effect
    doc.rect(tableLeft, tableTop, 500, rowHeight).fill("#2c3e50");

    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .fillColor("#ffffff")
      .text("Field", tableLeft + cellPadding, tableTop + cellPadding)
      .text(
        "Value",
        tableLeft + columnWidth + cellPadding,
        tableTop + cellPadding
      );

    // Table Rows with alternating colors
    const rows = [
      { label: "Room Name", value: roomName || "N/A" },
      { label: "Total Price", value: `${price || "N/A"} TK` },
      { label: "Payment Type", value: "Cash" },
      { label: "Payment Status", value: paymentStatus || "N/A" },
      {
        label: "Booking Dates",
        value: `${firstDate}${lastDate ? ` to ${lastDate}` : ""}`,
      },
    ];

    let currentY = tableTop + rowHeight;

    rows.forEach((row, index) => {
      // Alternate row background colors
      if (index % 2 === 0) {
        doc.rect(tableLeft, currentY, 500, rowHeight).fill("#f5f6fa");
      }

      doc
        .font("Helvetica")
        .fontSize(12)
        .fillColor("#2c3e50")
        .text(row.label, tableLeft + cellPadding, currentY + cellPadding)
        .text(
          row.value,
          tableLeft + columnWidth + cellPadding,
          currentY + cellPadding
        );

      currentY += rowHeight;
    });

    doc.moveDown(3);

    // ** Enhanced Track Booking Button **
    const trackBookingUrl = "http://localhost:3001/booking";
    const buttonWidth = 200;
    const buttonHeight = 40;
    const x = (doc.page.width - buttonWidth) / 2;
    const y = doc.y;

    doc.rect(x, y, buttonWidth, buttonHeight).fill("#3498db");

    // Calculate vertical center for text within the button height
    const textY = y + (buttonHeight - 14) / 2;

    doc
      .fontSize(14)
      .fillColor("#000000")
      .text("Track Your Booking", x, textY, {
        link: trackBookingUrl,
        align: "center",
        width: buttonWidth,
      })
      .moveDown(2);

    // ** Enhanced Footer with proper centering **
    const footerTop = doc.page.height - 100;
    const footerWidth = doc.page.width - 100;

    // Add decorative footer background
    doc.rect(0, footerTop - 20, doc.page.width, 120).fill("#f5f6fa");

    // Footer content
    doc
      .fontSize(12)
      .fillColor("#2c3e50")
      .text("Thank you for choosing Hotel Greenland!", 50, footerTop, {
        align: "center",
        width: footerWidth,
      })
      .fontSize(10)
      .fillColor("#7f8c8d")
      .text("For any inquiries, contact us at:", 50, doc.y + 5, {
        align: "center",
        width: footerWidth,
      })
      .fillColor("#3498db")
      .text("support@hotelgreenland.com", 50, doc.y + 5, {
        align: "center",
        width: footerWidth,
      });

    doc.end();
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({
      status: false,
      message: "Error generating PDF",
      error: error.message,
    });
  }
};
