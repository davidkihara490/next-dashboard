"use client"

import { useRouter } from "next/navigation"; // Import the useRouter hook
import Image from "next/image";

const VehicleCard = ({ vehicle }) => {
  const router = useRouter(); // Initialize router

  // Handle card click to navigate to the extras page
  const handleCardClick = () => {
    const queryString = new URLSearchParams({
      name: vehicle.name,
      category: vehicle.category,
      price: vehicle.price,
      dailyRate: vehicle.dailyRate,
      image: vehicle.image,
    }).toString();
    router.push(`/booking/book-vehicle/extras?${queryString}`);
    // router.push({
    //   pathname: "/booking/book-vehicle/extras", // Destination page
    //   query: {
    //     name: vehicle.name,
    //     category: vehicle.category,
    //     price: vehicle.price,
    //     dailyRate: vehicle.dailyRate,
    //     image: vehicle.image,
    //   },
    // });
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
          <h4 className="font-bold text-lg text-gray-800">{vehicle.name}</h4>
          <p className="text-sm text-gray-600">{vehicle.category}</p>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-2">
            {/* Stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < vehicle.rating ? "#fbbf24" : "#e5e7eb"} // Highlight based on rating
                className="w-4 h-4"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}

            {/* Number of Reviews */}
            <span className="ml-1 text-sm text-gray-600">
              ({vehicle.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-gray-800">{vehicle.price}</p>
        <p className="text-sm font-semibold text-gray-600">{vehicle.dailyRate}</p>
        <p className="text-sm font-semibold text-gray-600">x 3 days</p>
      </div>
    </div>

  );
};

export default VehicleCard;
