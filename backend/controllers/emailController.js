import dotenv from "dotenv";
import { sendMailWithGmail } from "../util.js/email.js";
dotenv.config();

export const sendEmail = async (req, res) => {
  try {
    const mailData = {
      to: [req.email],
      subject: req.subject,
      text: req.text,
    };
    await sendMailWithGmail(mailData);

    res.status(200).json({
      status: "success",
      message: "Email send successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

// zssxcggnezakdydn
