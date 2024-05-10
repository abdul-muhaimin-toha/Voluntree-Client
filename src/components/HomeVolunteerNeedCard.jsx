import { Link } from "react-router-dom";
import thumbnail from "../assets/volunteer-post/post-thumbnail-1.jpg";

const HomeVolunteerNeedCard = () => {
  return (
    <div className="flex rounded-lg border-2 border-primary shadow-lg">
      <div className="flex grow flex-col gap-6 rounded-md bg-white p-4  md:gap-10 dark:bg-black">
        <img
          src={thumbnail}
          alt="Product image"
          className="h-64 w-full rounded-md object-cover shadow-lg"
        />
        <div className="flex flex-col items-start justify-center gap-3">
          <h2 className="text-xl font-bold uppercase text-black dark:text-white">
            Hospital Volunteer Opportunities
          </h2>

          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <h4 className="gap-1 rounded-full bg-black px-4 py-1 text-xs font-bold capitalize text-white dark:bg-white dark:text-black">
              healthcare
            </h4>

            <p className="my-2 text-nowrap bg-primary p-1.5 text-xs text-white">
              Deadline: 24 June, 2024
            </p>
            <Link className="mt-4 w-full rounded-md bg-primary py-3 text-center font-semibold  uppercase text-white  transition-all duration-150 hover:text-black">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVolunteerNeedCard;
