"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

const Extras = () => {
    const router = useRouter();
    const { name, category, price, dailyRate, image } = router.query;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Vehicle Details</h1>
            <div className="flex items-center mb-6">
                {image && (
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                    />
                )}
                <div className="ml-6">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-md text-gray-600">{category}</p>
                    <p className="text-lg font-bold text-gray-800">{price}</p>
                    <p className="text-sm text-gray-600">{dailyRate}</p>
                </div>
            </div>
            {/* Add your extras components/logic here */}
            <button
                onClick={() => router.push("/vehicles")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Go Back to Vehicles
            </button>
        </div>
    );
};

export default Extras;
