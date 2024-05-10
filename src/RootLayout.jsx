import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const RootLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-396px)] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
