"use client"

import { useRouter } from "next/navigation"; // Import the useRouter hook
import Image from "next/image";

const VehicleCard = ({ vehicle }) => {
  const router = useRouter(); // Initialize router

  // Handle card click to navigate to the extras page
  const handleCardClick = () => {
    router.push({
      pathname: "/booking/book-vehicle/extras", // Destination page
      query: {
        name: vehicle.name,
        category: vehicle.category,
        price: vehicle.price,
        dailyRate: vehicle.dailyRate,
        image: vehicle.image,
      },
    });
  };

  return (
    <div
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg mb-4 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      onClick={handleCardClick} // Trigger navigation when clicked
    >
      <div className="flex items-center">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={120}
          height={80}
          className="rounded-lg object-cover"
        />
        <div className="ml-4">
          <h4 className="font-medium text-lg text-gray-800">{vehicle.name}</h4>
          <p className="text-sm text-gray-600">{vehicle.category}</p>
        </div>
      </div>

      <div>
        <p className="text-xl font-semibold text-gray-800">{vehicle.price}</p>
        <p className="text-sm text-gray-600">{vehicle.dailyRate}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
