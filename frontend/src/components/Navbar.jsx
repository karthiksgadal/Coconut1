import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / App name */}
      <h1 className="text-xl font-bold text-blue-600">Smart Event</h1>

      {/* Navigation links */}
      <div className="space-x-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
