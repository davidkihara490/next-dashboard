// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">My App</h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  