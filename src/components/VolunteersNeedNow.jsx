import { Link } from "react-router-dom";
import HomeVolunteerNeedCard from "./HomeVolunteerNeedCard";
import SectionHeading from "./SectionHeading";
import { FaArrowAltCircleRight } from "react-icons/fa";
import useSixPost from "../hooks/useSixPost.jsx";
import Loader from "./Loader.jsx";

const VolunteersNeedNow = () => {
  const { data, isPending } = useSixPost();

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4">
          <SectionHeading
            heading="Upcomming Volunteer Opportunities"
            subHeading="Explore Exciting Roles and Join a Cause You Believe In"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
            {data?.map((post) => (
              <HomeVolunteerNeedCard key={post._id} post={post} />
            ))}
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
