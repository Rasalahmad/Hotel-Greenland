import moment from "moment";
import Booking from "../models/bookingModel.js";

export const getWidgetStatistic = async (req, res) => {
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

    const isBookingIncrease = bookingsThisMonth > bookingsLastMonth;
    const bookingPercentageDifference = calculatePercentageDifference(
      bookingsLastMonth,
      bookingsThisMonth
    );

    // Query the database to calculate earnings for this month and last month
    const earningsThisMonth = await Booking.aggregate([
      {
        $match: {
          createdAt: { $gte: startOfMonth.toDate() },
        },
      },
      {
        $group: {
          _id: null,
          totalEarnings: { $sum: "$price" },
        },
      },
    ]);

    const earningsLastMonth = await Booking.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startOfLastMonth.toDate(),
            $lt: startOfMonth.toDate(),
          },
        },
      },
      {
        $group: {
          _id: null,
          totalEarnings: { $sum: "$price" },
        },
      },
    ]);

    // Query the database to calculate all-time earnings
    const allEarnings = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalEarnings: { $sum: "$price" },
        },
      },
    ]);

    const allEarningsValue = allEarnings[0] ? allEarnings[0].totalEarnings : 0;

    // Extract the earnings values from the aggregation results
    const earningsThisMonthValue = earningsThisMonth[0]
      ? earningsThisMonth[0].totalEarnings
      : 0;
    const earningsLastMonthValue = earningsLastMonth[0]
      ? earningsLastMonth[0].totalEarnings
      : 0;

    // Calculate earnings difference
    const earningsDifference = earningsThisMonthValue - earningsLastMonthValue;
    const isEarningsIncrease = earningsThisMonthValue > earningsLastMonthValue;
    const earningsPercentageDifference = calculatePercentageDifference(
      earningsLastMonthValue,
      earningsThisMonthValue
    );

    // Combine all sets of data
    const statistics = {
      bookingStatistic: {
        bookingsThisMonth,
        bookingsLastMonth,
        bookingDifference,
        totalBooking: booking,
        bookingPercentageDifference,
        isBookingIncrease,
      },
      earnings: {
        earningsThisMonth: earningsThisMonthValue,
        earningsLastMonth: earningsLastMonthValue,
        allEarnings: allEarningsValue,
        earningsDifference,
        earningsPercentageDifference,
        isEarningsIncrease,
      },
    };

    res.status(200).json({
      status: true,
      data: statistics,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while calculating the statistics.",
    });
  }
};
