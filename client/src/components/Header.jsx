import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
export default function Header() {
  const location = useLocation();
  const active =
    "text-lg bg-slate-800 text-white font-bold leading-6 rounded px-6 py-3 ";
  const inActive =
    "text-lg font-medium leading-6 text-slate-800 py-3 cursor-pointer";
  const [openMobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="bg-white items-center shadow-md  sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl items-center mx-auto p-4 md:p-6 lg:px-8">
        <Link to="/">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="AkpanHome"
            className="cursor-pointer h-8 w-auto"
          />
        </Link>
        <div className="hidden md:flex lg:space-x-8">
          <ul className="flex space-x-8">
            <Link to="/">
              <li className={location.pathname === "/" ? active : inActive}>
                Home
              </li>
            </Link>
            <Link to="/listing">
              <li
                className={location.pathname === "/listing" ? active : inActive}
              >
                Listing
              </li>
            </Link>
            <Link to="/agent">
              <li
                className={location.pathname === "/agent" ? active : inActive}
              >
                Agents
              </li>
            </Link>
            <Link to="/about">
              <li
                className={location.pathname === "/about" ? active : inActive}
              >
                About
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={location.pathname === "/contact" ? active : inActive}
              >
                Contact
              </li>
            </Link>
            <Link to="/login">
              <li
                className={location.pathname === "/login" ? active : inActive}
              >
                Login
              </li>
            </Link>
            <Link to="/register">
              <li
                className={
                  location.pathname === "/register" ? active : inActive
                }
              >
                Register
              </li>
            </Link>
          </ul>
        </div>
        <form className="flex items-center  bg-slate-200 rounded-xl p-3 ">
          <input
            type="text"
            placeholder="
              Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-400 cursor-pointer" />
        </form>
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenu(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-500 hover:text-blue-900 transition duration-100"
          >
            <FaBars />
          </button>
        </div>
      </div>
      <Dialog
        as="div"
        className={"md:hidden"}
        open={openMobileMenu}
        onClose={setMobileMenu}
      >
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-80" />
        <Dialog.Panel
          className={
            "fixed inset-y-0 right-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10 w-screen"
          }
        >
          <div className="flex items-center justify-between mb-3">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="AkpanHome"
              className="cursor-pointer h-8 w-auto"
            />
            <button
              onClick={() => setMobileMenu(false)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-500 hover:text-red-900 transition duration-100"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="my-2 divide-y divide-gray-500/50">
              <ul className=" space-y-6">
                <li className={location.pathname === "/" ? active : inActive}>
                  Home
                </li>
                <li
                  className={
                    location.pathname === "/listing" ? active : inActive
                  }
                >
                  Listing
                </li>
                <li
                  className={location.pathname === "/agent" ? active : inActive}
                >
                  Agents
                </li>
                <li
                  className={location.pathname === "/about" ? active : inActive}
                >
                  About
                </li>
                <li
                  className={
                    location.pathname === "/contact" ? active : inActive
                  }
                >
                  Contact
                </li>
                <li
                  className={location.pathname === "/login" ? active : inActive}
                >
                  Login
                </li>
                <li
                  className={
                    location.pathname === "/register" ? active : inActive
                  }
                >
                  Register
                </li>
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
