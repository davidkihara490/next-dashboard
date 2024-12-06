"use client"
import Breadcrumb from '@/app/components/Breadcrumbs/Breadcrumb';
import React from 'react'
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'

const Vehicles = () => {

  const vehicles = [
    { "id": 1, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] },
    { "id": 2, "plate": "KDA 007W", "make": "Honda", "model": "Civic", "year": 2019, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Petrol", "mileage": 22000, "engine_size": "1.5L", "fuel_efficiency": "17 km/l", "daily_rental_price": 45, "weekly_rental_price": 280, "deposit_amount": 180, "availability_status": "Rented", "insurance_policy": "Comprehensive", "registration_number": "KBC-456B", "vin": "2HGCM82633A456789", "inspection_date": "2024-02-10", "insurance_expiry": "2025-02-10", "features": { "air_conditioning": true, "gps": false, "audio_system": "Auxiliary", "additional_features": ["Leather Seats"] }, "images": ["/images/cars/honda-civic-side.jpg"], "thumbnail_image": "/images/cars/honda-civic-thumbnail.jpg", "current_location": "Westlands Branch", "branch": "Nairobi Westlands", "color": "White", "license_expiry_date": "2024-11-30", "ownership_status": "Leased", "accessories": [] },
    { "id": 3, "plate": "KDA 007W", "make": "BMW", "model": "X5", "year": 2021, "category": "SUV", "number_of_seats": 7, "number_of_doors": 5, "transmission": "Automatic", "fuel_type": "Diesel", "mileage": 12000, "engine_size": "3.0L", "fuel_efficiency": "12 km/l", "daily_rental_price": 120, "weekly_rental_price": 700, "deposit_amount": 500, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789C", "vin": "3BMWM82633A789456", "inspection_date": "2024-01-20", "insurance_expiry": "2025-01-20", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium", "additional_features": ["Panoramic Roof", "Parking Sensors"] }, "images": ["/images/cars/bmw-x5.jpg"], "thumbnail_image": "/images/cars/bmw-x5-thumbnail.jpg", "current_location": "Airport Branch", "branch": "JKIA Airport", "color": "Black", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": ["Roof Rack"] },
    { "id": 4, "plate": "KDA 007W", "make": "Mercedes", "model": "E-Class", "year": 2022, "category": "Luxury", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 8000, "engine_size": "2.0L", "fuel_efficiency": "14 km/l", "daily_rental_price": 150, "weekly_rental_price": 900, "deposit_amount": 600, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123D", "vin": "4MERZ82633A123456", "inspection_date": "2024-02-01", "insurance_expiry": "2025-02-01", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Heated Seats", "Ambient Lighting"] }, "images": ["/images/cars/mercedes-e-class.jpg"], "thumbnail_image": "/images/cars/mercedes-e-class-thumbnail.jpg", "current_location": "Karen Branch", "branch": "Nairobi Karen", "color": "Blue", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 5, "plate": "KDA 007W", "make": "Ford", "model": "Ranger", "year": 2020, "category": "Pickup Truck", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Diesel", "mileage": 30000, "engine_size": "2.2L", "fuel_efficiency": "10 km/l", "daily_rental_price": 70, "weekly_rental_price": 400, "deposit_amount": 300, "availability_status": "Under Maintenance", "insurance_policy": "Comprehensive", "registration_number": "KBC-456E", "vin": "5FORD82633A456789", "inspection_date": "2024-03-01", "insurance_expiry": "2025-03-01", "features": { "air_conditioning": true, "gps": false, "audio_system": "Standard", "additional_features": ["Tow Bar"] }, "images": ["/images/cars/ford-ranger.jpg"], "thumbnail_image": "/images/cars/ford-ranger-thumbnail.jpg", "current_location": "Industrial Area", "branch": "Nairobi Industrial", "color": "Gray", "license_expiry_date": "2024-10-31", "ownership_status": "Leased", "accessories": [] },
    { "id": 6, "plate": "KDA 007W", "make": "Tesla", "model": "Model 3", "year": 2023, "category": "Electric", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Electric", "mileage": 5000, "engine_size": "Electric", "fuel_efficiency": "300 km/charge", "daily_rental_price": 200, "weekly_rental_price": 1200, "deposit_amount": 1000, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789F", "vin": "6TESL82633A789456", "inspection_date": "2024-03-15", "insurance_expiry": "2025-03-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Autopilot", "Wireless Charging"] }, "images": ["/images/cars/tesla-model-3.jpg"], "thumbnail_image": "/images/cars/tesla-model-3-thumbnail.jpg", "current_location": "Riverside Branch", "branch": "Nairobi Riverside", "color": "Red", "license_expiry_date": "2026-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 7, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] },
    { "id": 8, "plate": "KDA 007W", "make": "Honda", "model": "Civic", "year": 2019, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Petrol", "mileage": 22000, "engine_size": "1.5L", "fuel_efficiency": "17 km/l", "daily_rental_price": 45, "weekly_rental_price": 280, "deposit_amount": 180, "availability_status": "Rented", "insurance_policy": "Comprehensive", "registration_number": "KBC-456B", "vin": "2HGCM82633A456789", "inspection_date": "2024-02-10", "insurance_expiry": "2025-02-10", "features": { "air_conditioning": true, "gps": false, "audio_system": "Auxiliary", "additional_features": ["Leather Seats"] }, "images": ["/images/cars/honda-civic-side.jpg"], "thumbnail_image": "/images/cars/honda-civic-thumbnail.jpg", "current_location": "Westlands Branch", "branch": "Nairobi Westlands", "color": "White", "license_expiry_date": "2024-11-30", "ownership_status": "Leased", "accessories": [] },
    { "id": 9, "plate": "KDA 007W", "make": "BMW", "model": "X5", "year": 2021, "category": "SUV", "number_of_seats": 7, "number_of_doors": 5, "transmission": "Automatic", "fuel_type": "Diesel", "mileage": 12000, "engine_size": "3.0L", "fuel_efficiency": "12 km/l", "daily_rental_price": 120, "weekly_rental_price": 700, "deposit_amount": 500, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789C", "vin": "3BMWM82633A789456", "inspection_date": "2024-01-20", "insurance_expiry": "2025-01-20", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium", "additional_features": ["Panoramic Roof", "Parking Sensors"] }, "images": ["/images/cars/bmw-x5.jpg"], "thumbnail_image": "/images/cars/bmw-x5-thumbnail.jpg", "current_location": "Airport Branch", "branch": "JKIA Airport", "color": "Black", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": ["Roof Rack"] },
    { "id": 10, "plate": "KDA 007W", "make": "Mercedes", "model": "E-Class", "year": 2022, "category": "Luxury", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 8000, "engine_size": "2.0L", "fuel_efficiency": "14 km/l", "daily_rental_price": 150, "weekly_rental_price": 900, "deposit_amount": 600, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123D", "vin": "4MERZ82633A123456", "inspection_date": "2024-02-01", "insurance_expiry": "2025-02-01", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Heated Seats", "Ambient Lighting"] }, "images": ["/images/cars/mercedes-e-class.jpg"], "thumbnail_image": "/images/cars/mercedes-e-class-thumbnail.jpg", "current_location": "Karen Branch", "branch": "Nairobi Karen", "color": "Blue", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 11, "plate": "KDA 007W", "make": "Ford", "model": "Ranger", "year": 2020, "category": "Pickup Truck", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Diesel", "mileage": 30000, "engine_size": "2.2L", "fuel_efficiency": "10 km/l", "daily_rental_price": 70, "weekly_rental_price": 400, "deposit_amount": 300, "availability_status": "Under Maintenance", "insurance_policy": "Comprehensive", "registration_number": "KBC-456E", "vin": "5FORD82633A456789", "inspection_date": "2024-03-01", "insurance_expiry": "2025-03-01", "features": { "air_conditioning": true, "gps": false, "audio_system": "Standard", "additional_features": ["Tow Bar"] }, "images": ["/images/cars/ford-ranger.jpg"], "thumbnail_image": "/images/cars/ford-ranger-thumbnail.jpg", "current_location": "Industrial Area", "branch": "Nairobi Industrial", "color": "Gray", "license_expiry_date": "2024-10-31", "ownership_status": "Leased", "accessories": [] },
    { "id": 12, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] },
    { "id": 13, "plate": "KDA 007W", "make": "Honda", "model": "Civic", "year": 2019, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Petrol", "mileage": 22000, "engine_size": "1.5L", "fuel_efficiency": "17 km/l", "daily_rental_price": 45, "weekly_rental_price": 280, "deposit_amount": 180, "availability_status": "Rented", "insurance_policy": "Comprehensive", "registration_number": "KBC-456B", "vin": "2HGCM82633A456789", "inspection_date": "2024-02-10", "insurance_expiry": "2025-02-10", "features": { "air_conditioning": true, "gps": false, "audio_system": "Auxiliary", "additional_features": ["Leather Seats"] }, "images": ["/images/cars/honda-civic-side.jpg"], "thumbnail_image": "/images/cars/honda-civic-thumbnail.jpg", "current_location": "Westlands Branch", "branch": "Nairobi Westlands", "color": "White", "license_expiry_date": "2024-11-30", "ownership_status": "Leased", "accessories": [] },
    { "id": 14, "plate": "KDA 007W", "make": "BMW", "model": "X5", "year": 2021, "category": "SUV", "number_of_seats": 7, "number_of_doors": 5, "transmission": "Automatic", "fuel_type": "Diesel", "mileage": 12000, "engine_size": "3.0L", "fuel_efficiency": "12 km/l", "daily_rental_price": 120, "weekly_rental_price": 700, "deposit_amount": 500, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789C", "vin": "3BMWM82633A789456", "inspection_date": "2024-01-20", "insurance_expiry": "2025-01-20", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium", "additional_features": ["Panoramic Roof", "Parking Sensors"] }, "images": ["/images/cars/bmw-x5.jpg"], "thumbnail_image": "/images/cars/bmw-x5-thumbnail.jpg", "current_location": "Airport Branch", "branch": "JKIA Airport", "color": "Black", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": ["Roof Rack"] },
    { "id": 15, "plate": "KDA 007W", "make": "Mercedes", "model": "E-Class", "year": 2022, "category": "Luxury", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 8000, "engine_size": "2.0L", "fuel_efficiency": "14 km/l", "daily_rental_price": 150, "weekly_rental_price": 900, "deposit_amount": 600, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123D", "vin": "4MERZ82633A123456", "inspection_date": "2024-02-01", "insurance_expiry": "2025-02-01", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Heated Seats", "Ambient Lighting"] }, "images": ["/images/cars/mercedes-e-class.jpg"], "thumbnail_image": "/images/cars/mercedes-e-class-thumbnail.jpg", "current_location": "Karen Branch", "branch": "Nairobi Karen", "color": "Blue", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 16, "plate": "KDA 007W", "make": "Ford", "model": "Ranger", "year": 2020, "category": "Pickup Truck", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Diesel", "mileage": 30000, "engine_size": "2.2L", "fuel_efficiency": "10 km/l", "daily_rental_price": 70, "weekly_rental_price": 400, "deposit_amount": 300, "availability_status": "Under Maintenance", "insurance_policy": "Comprehensive", "registration_number": "KBC-456E", "vin": "5FORD82633A456789", "inspection_date": "2024-03-01", "insurance_expiry": "2025-03-01", "features": { "air_conditioning": true, "gps": false, "audio_system": "Standard", "additional_features": ["Tow Bar"] }, "images": ["/images/cars/ford-ranger.jpg"], "thumbnail_image": "/images/cars/ford-ranger-thumbnail.jpg", "current_location": "Industrial Area", "branch": "Nairobi Industrial", "color": "Gray", "license_expiry_date": "2024-10-31", "ownership_status": "Leased", "accessories": [] },
    { "id": 17, "plate": "KDA 007W", "make": "Tesla", "model": "Model 3", "year": 2023, "category": "Electric", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Electric", "mileage": 5000, "engine_size": "Electric", "fuel_efficiency": "300 km/charge", "daily_rental_price": 200, "weekly_rental_price": 1200, "deposit_amount": 1000, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789F", "vin": "6TESL82633A789456", "inspection_date": "2024-03-15", "insurance_expiry": "2025-03-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Autopilot", "Wireless Charging"] }, "images": ["/images/cars/tesla-model-3.jpg"], "thumbnail_image": "/images/cars/tesla-model-3-thumbnail.jpg", "current_location": "Riverside Branch", "branch": "Nairobi Riverside", "color": "Red", "license_expiry_date": "2026-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 18, "plate": "KDA 007W", "make": "Toyota", "model": "Corolla", "year": 2020, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 15000, "engine_size": "1.8L", "fuel_efficiency": "15 km/l", "daily_rental_price": 50, "weekly_rental_price": 300, "deposit_amount": 200, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123A", "vin": "1HGCM82633A123456", "inspection_date": "2024-01-15", "insurance_expiry": "2025-01-15", "features": { "air_conditioning": true, "gps": true, "audio_system": "Bluetooth", "additional_features": ["Heated Seats", "Sunroof"] }, "images": ["/images/cars/toyota-corolla-front.jpg"], "thumbnail_image": "/images/cars/toyota-corolla-thumbnail.jpg", "current_location": "Downtown Branch", "branch": "Nairobi Downtown", "color": "Silver", "license_expiry_date": "2024-12-31", "ownership_status": "Owned", "accessories": ["Child Seat"] },
    { "id": 19, "plate": "KDA 007W", "make": "Honda", "model": "Civic", "year": 2019, "category": "Sedan", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Petrol", "mileage": 22000, "engine_size": "1.5L", "fuel_efficiency": "17 km/l", "daily_rental_price": 45, "weekly_rental_price": 280, "deposit_amount": 180, "availability_status": "Rented", "insurance_policy": "Comprehensive", "registration_number": "KBC-456B", "vin": "2HGCM82633A456789", "inspection_date": "2024-02-10", "insurance_expiry": "2025-02-10", "features": { "air_conditioning": true, "gps": false, "audio_system": "Auxiliary", "additional_features": ["Leather Seats"] }, "images": ["/images/cars/honda-civic-side.jpg"], "thumbnail_image": "/images/cars/honda-civic-thumbnail.jpg", "current_location": "Westlands Branch", "branch": "Nairobi Westlands", "color": "White", "license_expiry_date": "2024-11-30", "ownership_status": "Leased", "accessories": [] },
    { "id": 20, "plate": "KDA 007W", "make": "BMW", "model": "X5", "year": 2021, "category": "SUV", "number_of_seats": 7, "number_of_doors": 5, "transmission": "Automatic", "fuel_type": "Diesel", "mileage": 12000, "engine_size": "3.0L", "fuel_efficiency": "12 km/l", "daily_rental_price": 120, "weekly_rental_price": 700, "deposit_amount": 500, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-789C", "vin": "3BMWM82633A789456", "inspection_date": "2024-01-20", "insurance_expiry": "2025-01-20", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium", "additional_features": ["Panoramic Roof", "Parking Sensors"] }, "images": ["/images/cars/bmw-x5.jpg"], "thumbnail_image": "/images/cars/bmw-x5-thumbnail.jpg", "current_location": "Airport Branch", "branch": "JKIA Airport", "color": "Black", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": ["Roof Rack"] },
    { "id": 21, "plate": "KDA 007W", "make": "Mercedes", "model": "E-Class", "year": 2022, "category": "Luxury", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Automatic", "fuel_type": "Petrol", "mileage": 8000, "engine_size": "2.0L", "fuel_efficiency": "14 km/l", "daily_rental_price": 150, "weekly_rental_price": 900, "deposit_amount": 600, "availability_status": "Available", "insurance_policy": "Comprehensive", "registration_number": "KBC-123D", "vin": "4MERZ82633A123456", "inspection_date": "2024-02-01", "insurance_expiry": "2025-02-01", "features": { "air_conditioning": true, "gps": true, "audio_system": "Premium Surround", "additional_features": ["Heated Seats", "Ambient Lighting"] }, "images": ["/images/cars/mercedes-e-class.jpg"], "thumbnail_image": "/images/cars/mercedes-e-class-thumbnail.jpg", "current_location": "Karen Branch", "branch": "Nairobi Karen", "color": "Blue", "license_expiry_date": "2025-12-31", "ownership_status": "Owned", "accessories": [] },
    { "id": 22, "plate": "KDA 007W", "make": "Ford", "model": "Ranger", "year": 2020, "category": "Pickup Truck", "number_of_seats": 5, "number_of_doors": 4, "transmission": "Manual", "fuel_type": "Diesel", "mileage": 30000, "engine_size": "2.2L", "fuel_efficiency": "10 km/l", "daily_rental_price": 70, "weekly_rental_price": 400, "deposit_amount": 300, "availability_status": "Under Maintenance", "insurance_policy": "Comprehensive", "registration_number": "KBC-456E", "vin": "5FORD82633A456789", "inspection_date": "2024-03-01", "insurance_expiry": "2025-03-01", "features": { "air_conditioning": true, "gps": false, "audio_system": "Standard", "additional_features": ["Tow Bar"] }, "images": ["/images/cars/ford-ranger.jpg"], "thumbnail_image": "/images/cars/ford-ranger-thumbnail.jpg", "current_location": "Industrial Area", "branch": "Nairobi Industrial", "color": "Gray", "license_expiry_date": "2024-10-31", "ownership_status": "Leased", "accessories": [] },
  ]
  const router = useRouter();
  const handleViewVehicle = (id) => {
    router.push(`cars/${id}`)
  }
  const handleEditVehicle = (id) => {
    router.push(`cars/edit/${id}`)
  }
  const handleDeleteVehicle = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // try {
        //   const response = await fetch(`/api/categories/${id}`, {
        //     method: "DELETE",
        //   });

        //   if (response.ok) {
        //     Swal.fire({
        //       title: "Deleted!",
        //       text: "The category has been deleted.",
        //       icon: "success",
        //       confirmButtonText: "OK",
        //     });

        //     // Optional: Refresh or update the UI after deletion
        //     // Example: refreshCategoryList();
        //   } else {
        //     throw new Error(`Failed to delete category with ID ${id}`);
        //   }
        // } catch (error) {
        //   Swal.fire({
        //     title: "Error!",
        //     text: "Something went wrong. Please try again.",
        //     icon: "error",
        //     confirmButtonText: "OK",
        //   });
        //   console.error("Error deleting category:", error);
        // }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "The category is safe.",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <>
      <Breadcrumb pageName="Vehicles" />
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-2">
                  Reg No
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Rental price
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Make
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Category
                </th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-2">
                  Capacity
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Transmission
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Fuel Type
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Availability
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.registration_number}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-2 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      <span className="font-medium">Daily:</span> Ksh{vehicle.daily_rental_price} <br />
                      <span className="font-medium">Weekly:</span> Ksh{vehicle.weekly_rental_price}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.make}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.category}
                    </h5>
                  </td><td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.number_of_seats}
                    </h5>
                  </td><td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.transmission}
                    </h5>
                  </td><td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.fuel_type}
                    </h5>
                  </td><td className="border-b border-[#eee] px-2 py-2 pl-2 dark:border-strokedark xl:pl-2">
                    <h5 className="font-medium text-black dark:text-white">
                      {vehicle.availability_status}
                    </h5>
                  </td>
                  {/* <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${vehicle.status === "Paid"
                        ? "bg-success text-success"
                        : vehicle.status === "Unpaid"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                        }`}
                    >
                      {vehicle.status}
                    </p>
                  </td> */}
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button
                        onClick={() => handleViewVehicle(vehicle.id)}
                        className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEditVehicle(vehicle.id)}
                        className="hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                          <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteVehicle(vehicle.id)}
                        className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Vehicles