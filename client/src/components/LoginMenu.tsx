import { useState  } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function LoginMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block  text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 hover:bg-yellow-500  text-white px-4 py-2 rounded-full focus:outline-none"
        aria-label="Toggle login menu"
      >
        <FaUser />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
          <Link
            to="/login"
            className="block px-4 py-2 text-base text-gray-800 font-medium hover:bg-yellow-100 hover:text-yellow-600 transition"
            onClick={() => setOpen(false)}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-base text-gray-800 font-medium hover:bg-yellow-100 hover:text-yellow-600 transition"
            onClick={() => setOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
