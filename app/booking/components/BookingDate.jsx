"use client"

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RentalPeriod = () => {
  // State to store start and end date values
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to calculate the number of days between two dates
  const calculateDays = (start, end) => {
    if (start && end) {
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert ms to days
      return differenceInDays + 1; // Add 1 to include both the start and end dates
    }
    return 0;
  };

  const daysToCharge = calculateDays(startDate, endDate);

  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Select Rental Period</h2>

      {/* Datepicker for Start Date */}
      <div className="mb-4">
        <label>Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="MMM d, yyyy h:mm aa"
          className="border p-2"
        />
      </div>

      {/* Datepicker for End Date */}
      <div className="mb-4">
        <label>End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          dateFormat="MMM d, yyyy h:mm aa"
          className="border p-2"
        />
      </div>

      {/* Display number of days and "Charged as X days" */}
      {startDate && endDate && (
        <div className="mt-4">
          <p>
            {`Start Date: ${startDate.toLocaleString()}`}
          </p>
          <p>
            {`End Date: ${endDate.toLocaleString()}`}
          </p>
          <p>
            {`Charged as ${daysToCharge} days`}
          </p>
        </div>
      )}

      {/* Disable the update button until both dates are selected */}
      <button
        disabled={!startDate || !endDate}
        className={`mt-4 py-2 px-4 bg-blue-600 text-white rounded ${!startDate || !endDate ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Update Period
      </button>
    </div>
  );
};

export default RentalPeriod;
