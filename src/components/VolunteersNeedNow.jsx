import { Link } from "react-router-dom";
import HomeVolunteerNeedCard from "./HomeVolunteerNeedCard";
import SectionHeading from "./SectionHeading";
import { FaArrowAltCircleRight } from "react-icons/fa";

const VolunteersNeedNow = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4">
          <SectionHeading
            heading="Volunteer Opportunities"
            subHeading="Explore Exciting Roles and Join a Cause You Believe In"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <HomeVolunteerNeedCard />
            <HomeVolunteerNeedCard />
            <HomeVolunteerNeedCard />
            <HomeVolunteerNeedCard />
            <HomeVolunteerNeedCard />
            <HomeVolunteerNeedCard />
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/all-arts"
              className=" flex items-center justify-center gap-4 rounded-md px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-primary dark:text-white"
            >
              <p>Explore More</p>
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteersNeedNow;
