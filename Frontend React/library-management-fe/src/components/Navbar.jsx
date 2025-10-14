import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-blue-600 flex items-center justify-between px-8 py-4 fixed top-0 left-0 w-full shadow-md z-50">
        <Link
          to="/home"
          className="text-white font-semibold text-xl hover:text-green-300 "
        >
          Library Management System
        </Link>

        <ul className="flex gap-10 ">
          <li>
            <Link
              to="/books"
              className="bg-blue-700 px-4 py-1 rounded-xl text-white hover:bg-blue-800 transition inline-block"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-blue-700 px-4 py-1 rounded-xl text-white hover:bg-blue-800 transition inline-block"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
