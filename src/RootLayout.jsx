import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const RootLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="min-h-[calc(100vh-430px)]">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
