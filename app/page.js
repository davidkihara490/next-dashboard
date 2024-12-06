"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const kenyaTowns = [
    { id: 1, name: "Nairobi" },
    { id: 2, name: "Mombasa" },
    { id: 3, name: "Kisumu" },
    { id: 4, name: "Nakuru" },
    { id: 5, name: "Eldoret" },
    { id: 6, name: "Thika" },
    { id: 7, name: "Nyeri" },
    { id: 8, name: "Machakos" },
    { id: 9, name: "Kericho" },
    { id: 10, name: "Kakamega" },
  ];


  useEffect(() => {
    // Set current date and time for the default values
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    const formattedTime = now.toTimeString().split(" ")[0].substring(0, 5); // Format as HH:MM
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, []);

  const handleBookingVehicle = () => {
    router.push(`booking/book-vehicle`)
  }

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/dummy-background.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="relative z-10 flex justify-center items-center h-full text-center text-white">
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight">
            The easiest way to rent a car.
          </h1>
          <p className="text-xl">For work or holiday we'll get you from here to there</p>

          {/* Date & Time Picker Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            {/* Location Dropdown */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <label htmlFor="location" className="text-sm text-gray-700">Location</label>
                <select
                  id="location"
                  className="w-full mt-2 p-2 border rounded-md text-black"
                >
                  {kenyaTowns.map((town) => (
                    <option key={town.id} value={town.name}>
                      {town.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Start Date and Time */}
            <div className="flex justify-between items-center space-x-4">
              <div className="flex-1">
                <label htmlFor="start-date" className="text-sm text-gray-700">Start Date</label>
                <input
                  id="start-date"
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-md text-black"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="start-time" className="text-sm text-gray-700">Time</label>
                <input
                  id="start-time"
                  type="time"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-md text-black"
                />
              </div>
            </div>

            {/* End Date and Time */}
            <div className="flex justify-between items-center space-x-4">
              <div className="flex-1">
                <label htmlFor="end-date" className="text-sm text-gray-700">End Date</label>
                <input
                  id="end-date"
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-md text-black"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="end-time" className="text-sm text-gray-700">Time</label>
                <input
                  id="end-time"
                  type="time"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-md text-black"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <button
                onClick={() => handleBookingVehicle()}

                className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
