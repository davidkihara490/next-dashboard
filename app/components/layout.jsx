// components/Layout.js
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 ml-64 bg-gray-100">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="p-6 pt-24">{children}</main>
      </div>
    </div>
  );
}
