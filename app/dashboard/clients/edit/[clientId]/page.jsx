"use client"
import { useState } from "react";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const EditClient = () => {
  const client = {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "0700123456",
    "address": "1456 Waiyaki Way, Nairobi",
    "date_of_birth": "1990-05-15",
    "license_number": "D123456789",
    "license_expiry_date": "2025-05-15",
    "nationality": "Kenyan",
    "gender": "Male",
    "id_number": "ID12345678",
    "preferred_payment_method": "Credit Card",
    "emergency_contact": {
      "name": "Jane Doe",
      "phone": "0712345678"
    },
    "notes": "Prefers SUVs."
  };

  const [formData, setFormData] = useState(client);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Breadcrumb pageName="Edit Client" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Header */}
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Edit Client</h3>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-7 space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">License Number</label>
              <input
                type="text"
                name="license_number"
                value={formData.license_number}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">License Expiry Date</label>
              <input
                type="date"
                name="license_expiry_date"
                value={formData.license_expiry_date}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-black dark:text-white">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-stroke p-2 rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="font-medium text-sm text-black dark:text-white">Emergency Contact Name</label>
            <input
              type="text"
              name="emergency_contact_name"
              value={formData.emergency_contact.name}
              onChange={handleChange}
              className="w-full border border-stroke p-2 rounded"
            />
            <label className="font-medium text-sm text-black dark:text-white">Emergency Contact Phone</label>
            <input
              type="tel"
              name="emergency_contact_phone"
              value={formData.emergency_contact.phone}
              onChange={handleChange}
              className="w-full border border-stroke p-2 rounded"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="font-medium text-sm text-black dark:text-white">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-stroke p-2 rounded"
            />
          </div>

          <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditClient;
