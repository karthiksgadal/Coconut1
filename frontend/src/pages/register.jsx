export default function register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label> */}
            <input
              type="text"
              placeholder="NAME"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label> */}
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label> */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label> */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
