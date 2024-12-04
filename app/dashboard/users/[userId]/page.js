"use client";

import { useParams } from 'next/navigation';

const UserDetail = () => {
  const { userId } = useParams();

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, IL',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p><strong>Id:</strong> {userId}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}

export default UserDetail;
