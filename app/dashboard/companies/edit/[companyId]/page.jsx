"use client"
import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const EditCompany = () => {
  // Destructure company data and set initial state

  const company = {
    id: 1,
    name: "John Doe Enterprises",
    address: "1456 Waiyaki Way",
    description: "Providing innovative tech solutions across the globe.",
    business_email: "john@example.com",
    business_phone: "0700123456",
    logo: "/images/cards/cards-03.png",
    owner: {
      id: 1,
      name: "John Doe",
    },
    status: "active",
  };

  const [name, setName] = useState(company.name);
  const [address, setAddress] = useState(company.address);
  const [description, setDescription] = useState(company.description);
  const [email, setEmail] = useState(company.email);
  const [phone, setPhone] = useState(company.phone);
  const [logo, setLogo] = useState(company.logo);
  const [status, setStatus] = useState(company.status);



  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = {
      name,
      address,
      description,
      business_email: email,
      business_phone: phone,
      logo,
      status,
    };
    console.log("Updated Company Data:", updatedCompany);
    // Add logic to send the updatedCompany object to an API or backend
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Breadcrumb pageName="Edit Company" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Company Information
          </h3>
        </div>
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Address
              </label>
              <input
                type="text"
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Description
              </label>
              <textarea
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Business Email */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Business Email
              </label>
              <input
                type="email"
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Business Phone */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Business Phone
              </label>
              <input
                type="text"
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Logo */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Logo
              </label>
              <div className="flex items-center gap-4">
                {logo && (
                  <div className="h-16 w-16 rounded overflow-hidden">
                    <Image
                      src={logo}
                      alt="Company Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="w-full rounded border border-dashed border-primary bg-gray px-4 py-3 dark:bg-meta-4"
                  onChange={(e) => setLogo(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
            </div>

            {/* Status */}
            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Status
              </label>
              <select
                className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4.5">
              <button
                type="button"
                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCompany;
