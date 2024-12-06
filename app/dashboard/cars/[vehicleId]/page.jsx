import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const ViewVehicle = () => {
  const vehicle = { "id": 1, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Breadcrumb pageName="View Vehicle" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Header */}
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Vehicle Details</h3>
        </div>

        {/* Content */}
        <div className="p-7 space-y-6">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center border border-stroke rounded bg-gray-50 dark:bg-meta-4">
              <Image
                src={vehicle.thumbnail_image || "/images/cards/cards-o1.png"}
                alt={`${vehicle.make} ${vehicle.model}`}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-black dark:text-white">Additional Images</h4>
              <div className="grid grid-cols-3 gap-2">
                {vehicle.images.map((img, index) => (
                  <div key={index} className="h-24 w-24 rounded overflow-hidden">
                    <Image
                      src={img}
                      alt={`Image ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Make & Model</h4>
              <p className="text-gray-600 dark:text-gray-300">{`${vehicle.make} ${vehicle.model} (${vehicle.year})`}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Category</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.category}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Seats</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.number_of_seats}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Transmission</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.transmission}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Fuel Type</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.fuel_type}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Mileage</h4>
              <p className="text-gray-600 dark:text-gray-300">{`${vehicle.mileage} km`}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Engine Size</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.engine_size}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Fuel Efficiency</h4>
              <p className="text-gray-600 dark:text-gray-300">{vehicle.fuel_efficiency}</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Daily Price</h4>
              <p className="text-gray-600 dark:text-gray-300">${vehicle.daily_rental_price}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Weekly Price</h4>
              <p className="text-gray-600 dark:text-gray-300">${vehicle.weekly_rental_price}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">Deposit Amount</h4>
              <p className="text-gray-600 dark:text-gray-300">${vehicle.deposit_amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVehicle;
