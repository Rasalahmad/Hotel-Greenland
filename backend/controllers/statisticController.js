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

export const getBookingTransaction = async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1); // Calculate the date 1 year ago

    const pipeline = [
      {
        $match: {
          createdAt: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          income: { $sum: "$price" },
        },
      },
    ];

    const bookingData = await Booking.aggregate(pipeline);

    // Map month numbers to month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the current month and year
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const last12Months = [];
    for (let i = 11; i >= 0; i--) {
      const month = (currentMonth - i + 12) % 12;
      last12Months.push(month);
    }

    // Create an array with 0 total income for the last 12 months
    const resultData = last12Months.map((monthIndex) => {
      const monthData = bookingData.find((data) => data._id === monthIndex + 1);
      return {
        name: monthNames[monthIndex],
        Total: monthData ? monthData.income : 0,
      };
    });

    res.status(200).json({
      status: true,
      data: resultData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Data can't be fetched",
      error: error.message,
    });
  }
};
