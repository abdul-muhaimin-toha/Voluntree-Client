import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";

const RootLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="min-h-[calc(100vh-430px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
