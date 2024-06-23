import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto">
        <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
