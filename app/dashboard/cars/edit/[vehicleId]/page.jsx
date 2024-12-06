"use client"
import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const EditVehicle = () => {

  const vehicle = { "id": 1, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] };

  const [formData, setFormData] = useState(vehicle);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox for features
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: { ...prev.features, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Vehicle Data:", formData);
    // Add API call logic to update vehicle here
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Breadcrumb pageName="Edit Vehicle" />

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
        {/* Vehicle Information */}
        <h3 className="text-lg font-medium text-black dark:text-white">Vehicle Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Plate Number
            </label>
            <input
              type="text"
              name="plate"
              value={formData.plate}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Make
            </label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
        </div>

        {/* Specifications */}
        <h3 className="text-lg font-medium text-black dark:text-white">Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Transmission
            </label>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Fuel Type
            </label>
            <select
              name="fuel_type"
              value={formData.fuel_type}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Mileage
            </label>
            <input
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Engine Size
            </label>
            <input
              type="text"
              name="engine_size"
              value={formData.engine_size}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
        </div>

        {/* Features */}
        <h3 className="text-lg font-medium text-black dark:text-white">Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <label>
            <input
              type="checkbox"
              name="air_conditioning"
              checked={formData.features.air_conditioning}
              onChange={handleChange}
            />{" "}
            Air Conditioning
          </label>
          <label>
            <input
              type="checkbox"
              name="gps"
              checked={formData.features.gps}
              onChange={handleChange}
            />{" "}
            GPS
          </label>
          <label>
            <input
              type="checkbox"
              name="audio_system"
              checked={formData.features.audio_system === "Bluetooth"}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  features: { ...prev.features, audio_system: "Bluetooth" },
                }))
              }
            />{" "}
            Bluetooth Audio
          </label>
        </div>

        {/* Pricing */}
        <h3 className="text-lg font-medium text-black dark:text-white">Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Daily Rental Price
            </label>
            <input
              type="number"
              name="daily_rental_price"
              value={formData.daily_rental_price}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Weekly Rental Price
            </label>
            <input
              type="number"
              name="weekly_rental_price"
              value={formData.weekly_rental_price}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm text-black dark:text-white">
              Deposit Amount
            </label>
            <input
              type="number"
              name="deposit_amount"
              value={formData.deposit_amount}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVehicle;
