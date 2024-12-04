import React from 'react'

const DashboardCard = () => {

    const cards = [
        { title: "Today's Bookings", figure: 25, icon: "📅" },
        { title: "Today's Earnings", figure: "$2,500", icon: "💰" },
        { title: "Today's Clients", figure: 15, icon: "👤" },
        { title: "Today's Sign-ins", figure: 50, icon: "✅" },
        { title: "Total Vehicles", figure: 120, icon: "🚗" },
        { title: "Total Bookings", figure: 500, icon: "📝" },
        { title: "Total Clients", figure: 300, icon: "👥" },
        { title: "Total Branches", figure: 10, icon: "🏢" },
    ];
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow p-4 flex items-center"
                    >
                        <div className="text-4xl mr-4">{card.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                {card.title}
                            </h3>
                            <p className="text-2xl font-bold text-gray-900">{card.figure}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardCard