import moment from "moment";
import Booking from "../models/bookingModel.js";

export const getBookingStatistic = async (req, res) => {
  try {
    const today = moment(); // Get the current date
    const lastMonth = moment().subtract(1, "month"); // Get the date for last month

    // Calculate the beginning of this month and the beginning of last month
    const startOfMonth = today.startOf("month");
    const startOfLastMonth = lastMonth.startOf("month");

    // Query the database to count the bookings for this month and last month
    const bookingsThisMonth = await Booking.countDocuments({
      createdAt: { $gte: startOfMonth.toDate() },
    });
    const bookingsLastMonth = await Booking.countDocuments({
      createdAt: {
        $gte: startOfLastMonth.toDate(),
        $lt: startOfMonth.toDate(),
      },
    });
    const booking = await Booking.countDocuments();

    // Calculate the difference
    const bookingDifference = bookingsThisMonth - bookingsLastMonth;

    function calculatePercentageDifference(previousValue, currentValue) {
      if (previousValue === 0) {
        return currentValue === 0 ? 0 : 100;
      }
      return ((currentValue - previousValue) / previousValue) * 100;
    }

    const isIncrease = bookingsThisMonth > bookingsLastMonth;

    const percentageDifference = calculatePercentageDifference(
      bookingsLastMonth,
      bookingsThisMonth
    );

    const bookingStatistic = {
      bookingsThisMonth,
      bookingsLastMonth,
      bookingDifference,
      totalBooking: booking,
      percentageDifference,
      isIncrease,
    };

    res.status(200).json({
      status: true,
      data: bookingStatistic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while calculating the booking statistic.",
    });
  }
};
