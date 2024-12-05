
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const ViewCategory = ({ category }) => {
  // Simulated category data
  const {
    name = "Luxury SUV",
    minimum_seats = 5,
    maximum_seats = 7,
    description = "Premium luxury SUV with spacious interiors and advanced features.",
    image = "/images/cards/cards-03.png",
    status = "Active",
  } = category || {};

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="View Category" />

      <div className="grid grid-cols-5 gap-8">
        {/* Category Information */}
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Category Information
              </h3>
            </div>
            <div className="p-7 space-y-5">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-black dark:text-white">
                  Name
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{name}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-black dark:text-white">
                  Minimum Seats
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{minimum_seats}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-black dark:text-white">
                  Maximum Seats
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{maximum_seats}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-black dark:text-white">
                  Description
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-black dark:text-white">
                  Status
                </h4>
                <p
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                    status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Image */}
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Category Image
              </h3>
            </div>
            <div className="p-7 flex flex-col items-center">
              <div className="h-48 w-48 rounded-lg overflow-hidden border border-stroke">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt="Category Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
