import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

export default function HelpMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left z-50">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Open help menu"
            >
                <RxHamburgerMenu size={24} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 shadow-xl rounded-md">
                    <Link
                        to="/tutorial/create-account"
                        className="block px-4 py-2 text-base text-gray-800 font-medium hover:bg-yellow-100 hover:text-yellow-600 rounded transition duration-150"
                        onClick={() => setOpen(false)}
                    >
                        Tutorial
                    </Link>
                    <Link
                        to="/faq/create-account"
                        className="block px-4 py-2 text-base text-gray-800 font-medium hover:bg-yellow-100 hover:text-yellow-600 rounded transition duration-150"
                        onClick={() => setOpen(false)}
                    >
                        FAQ
                    </Link>
                </div>
            )}

        </div>
    );
}
