// pages/users.js
import Link from 'next/link';

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Samuel Green', email: 'samuel@example.com', status: 'Active' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.status}</td>
              <td className="px-6 py-3">
                <Link href={`/users/${user.id}`} passHref>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">View</button>
                </Link>
                <Link href={`/users/edit/${user.id}`} passHref>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Deactivate</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
