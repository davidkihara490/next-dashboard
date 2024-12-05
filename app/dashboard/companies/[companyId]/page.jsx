import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const ViewCompany = () => {
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

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Breadcrumb pageName="View Company" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Header */}
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Company Details</h3>
        </div>

        {/* Content */}
        <div className="p-7 space-y-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-6">
            {company.logo && (
              <div className="h-24 w-24 rounded overflow-hidden border border-stroke">
                <Image
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            )}
            <h1 className="text-2xl font-semibold text-black dark:text-white">{company.name}</h1>
          </div>

          {/* General Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">
                Address
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{company.address}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">
                Status
              </h4>
              <p
                className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${company.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                  }`}
              >
                {company.status}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">
                Business Email
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{company.business_email}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">
                Business Phone
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{company.business_phone}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-medium text-sm text-black dark:text-white">
              Description
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{company.description}</p>
          </div>

          {/* Owner Information */}
          {company.owner && (
            <div>
              <h4 className="font-medium text-sm text-black dark:text-white">
                Owner
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{company.owner.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCompany;
