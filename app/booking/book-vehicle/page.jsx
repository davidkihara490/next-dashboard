"use client"

import React, { useState } from 'react';
import Filter from '../components/Filter';
import VehicleCard from '../components/VehicleCard';
import BookingDate from '../components/BookingDate';
import RentalPeriod from '../components/BookingDate';

const VehicleBooking = () => {
    const [location, setLocation] = useState('Nairobi');
    const [startDate, setStartDate] = useState('2024-12-08');
    const [startTime, setStartTime] = useState('10:00');
    const [endDate, setEndDate] = useState('2024-12-11');
    const [endTime, setEndTime] = useState('10:00');

    const vehicles = [
        { id: 1, name: 'Toyota Axio', category: 'Medium Car', price: 'KES 12,000', dailyRate: 'KES 4,000/day', image: '/images/cards/cards-01.png', reviews: 4, rating: 3 },
        { id: 2, name: 'Toyota Probox', category: 'Medium Car', price: 'KES 12,000', dailyRate: 'KES 4,000/day', image: '/images/cards/cards-01.png', reviews: 5, rating: 5 },
        { id: 3, name: 'Toyota Mark X', category: 'Medium Car', price: 'KES 21,000', dailyRate: 'KES 7,000/day', image: '/images/cards/cards-01.png', reviews: 6, rating: 3 },
        { id: 4, name: 'Toyota Rav4', category: 'Mid-Size SUV', price: 'KES 21,000', dailyRate: 'KES 7,000/day', image: '/images/cards/cards-01.png', reviews: 15, rating: 4 },
        { id: 5, name: 'Toyota Vanguard', category: 'Mid-Size SUV', price: 'KES 21,000', dailyRate: 'KES 7,000/day', image: '/images/cards/cards-01.png', reviews: 14, rating: 3 },
    ];

    return (
        <div className="p-6">
            <RentalPeriod />
            <hr className="my-4 " />
            {/* Filter & Vehicle List Section */}
            <div className="flex flex-col md:flex-row">
                {/* Filters Section */}
                <Filter />

                {/* Vehicles List */}
                <div className="w-full md:w-3/4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {vehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleBooking;


//   {/* Time Selection Section */}
//   <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
//     <h2 className="text-lg font-medium text-gray-800 mb-4">Selected Time & Location</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {/* Location */}
//       <div>
//         <label className="block text-sm text-gray-600">Location</label>
//         <select
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         >
//           {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika"].map((town) => (
//             <option key={town} value={town}>
//               {town}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Start Date */}
//       <div>
//         <label className="block text-sm text-gray-600">Start Date</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//       </div>

//       {/* Start Time */}
//       <div>
//         <label className="block text-sm text-gray-600">Start Time</label>
//         <input
//           type="time"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//       </div>

//       {/* End Date */}
//       <div>
//         <label className="block text-sm text-gray-600">End Date</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//       </div>

//       {/* End Time */}
//       <div>
//         <label className="block text-sm text-gray-600">End Time</label>
//         <input
//           type="time"
//           value={endTime}
//           onChange={(e) => setEndTime(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//         />
//       </div>
//     </div>
//   </div>
