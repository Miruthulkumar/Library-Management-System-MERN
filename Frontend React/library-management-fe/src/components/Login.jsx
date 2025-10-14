function Login() {
  return (
    <div className="bg-gray-900 h-screen w-screen flex items-center justify-center ">
      <div className="bg-gray-800 rounded-xl shadow-xl px-8 py-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Library Management System
        </h1>
        <p className="text-gray-400 mb-8 text-center">Login to Continue</p>
        <form className="w-full flex flex-col gap-5">
          <div>
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-100"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-8">Don't have an account?</p>
        <button
          type="submit"
          className="mt-02 bg-blue-600 text-white font-semibold py-2 w-full flex flex-col gap-5 mt-8 rounded-lg hover:bg-blue-700 transition-colors duration-100"
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;
