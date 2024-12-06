import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";

const ViewClient = () => {
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
        "rental_history": [],
        "registration_date": "2023-10-01",
        "emergency_contact": {
            "name": "Jane Doe",
            "phone": "0712345678"
        },
        "profile_picture": "/images/user/user-01.png",
        "status": "Active",
        "vip_status": false,
        "discount_eligibility": true,
        "notes": "Prefers SUVs."
    };

    return (
        <div className="mx-auto max-w-5xl p-6">
            <Breadcrumb pageName="View Client" />

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {/* Header */}
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Client Details</h3>
                </div>

                {/* Content */}
                <div className="p-7 space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center justify-start">
                        <Image
                            src={client.profile_picture || "/images/user/user-01.png"}
                            alt={`${client.name}'s Profile`}
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                        <div className="ml-4">
                            <h4 className="font-medium text-lg text-black dark:text-white">{client.name}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.email}</p>
                            <p className="text-gray-600 dark:text-gray-300">{client.phone}</p>
                        </div>
                    </div>

                    {/* Client Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">Address</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.address}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">Date of Birth</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.date_of_birth}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">License Number</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.license_number}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">License Expiry Date</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.license_expiry_date}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">Nationality</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.nationality}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">Gender</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.gender}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">ID Number</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.id_number}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-black dark:text-white">Preferred Payment Method</h4>
                            <p className="text-gray-600 dark:text-gray-300">{client.preferred_payment_method}</p>
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div>
                        <h4 className="font-medium text-sm text-black dark:text-white">Emergency Contact</h4>
                        <p className="text-gray-600 dark:text-gray-300">{client.emergency_contact.name}</p>
                        <p className="text-gray-600 dark:text-gray-300">{client.emergency_contact.phone}</p>
                    </div>

                    {/* Additional Information */}
                    <div>
                        <h4 className="font-medium text-sm text-black dark:text-white">Notes</h4>
                        <p className="text-gray-600 dark:text-gray-300">{client.notes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewClient;
