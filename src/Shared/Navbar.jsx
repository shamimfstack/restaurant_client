import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";

const navOptions = (
  <>
    <li className="text-lg font-medium">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li className="text-lg font-medium">
      <NavLink
        to="/allFoods"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline" : ""
        }
      >
        All Foods
      </NavLink>
    </li>
    <li className="text-lg font-medium">
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline" : ""
        }
      >
        Blog
      </NavLink>
    </li>
    <li className="text-lg font-medium">
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline" : ""
        }
      >
        Login
      </NavLink>
    </li>
  </>
);

export default function Navbar() {
  const [ showDropdown, setShowDropdown ] = useState(false);

  return (
    <div className="p-4 bg-[#080808] text-white">
      <nav className="flex justify-between items-center">
        <Link className="flex items-center" to="/">
          <img className="w-20" src={logo} alt="" />{" "}
          <span className="ml-4 text-2xl font-bold">Khai Khai</span>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-6">{navOptions}</ul>
        </div>
        <div className="flex md:hidden relative">
          <button onClick={() => setShowDropdown(!showDropdown)} className="">
            <HiMiniBars3 className="text-3xl" />
          </button>
          <div className={
                    showDropdown
                      ? "absolute w-64 bg-[#080808] shadow-lg top-16 text-center -right-4 p-6 rounded-lg flex flex-col z-10"
                      : "hidden"
                  }>
            <ul className="space-y-2 transition">

            {navOptions}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
