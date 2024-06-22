import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.jpg"

const navOptions = <>
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
          {/* <li className="text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline" : ""
              }
            >
              Home
            </NavLink>
          </li> */}
</>

export default function Navbar() {
  return (
    <div className="p-4">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <Link className="flex items-center" to="/">
        <img className="w-20" src={logo} alt="" /> <span className="ml-4 text-2xl font-bold">Khai Khai</span></Link>
        <ul className="flex gap-6">
          {navOptions}
        </ul>
      </nav>
    </div>
  );
}
