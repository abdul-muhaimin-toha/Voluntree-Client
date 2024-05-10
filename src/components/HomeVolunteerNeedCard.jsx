import { Link } from "react-router-dom";
import thumbnail from "../assets/volunteer-post/post-thumnail-1.jpg";

const HomeVolunteerNeedCard = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#fff] shadow-xl dark:bg-[#000]">
      <img
        src={thumbnail}
        alt=""
        className="h-72 w-full rounded-t-md object-cover"
      />
      <div className=" flex flex-col p-4 md:p-6 ">
        <h4 className="text-2xl  font-black text-black dark:text-white">
          Tutoring Program Volunteers Needed
        </h4>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
          <p className="self-start rounded-sm bg-primary p-1.5  text-white">
            Category: Education
          </p>
          <p className="self-start rounded-sm bg-primary p-1.5  text-white">
            Deadline: june 24, 2024
          </p>
        </div>
        <Link className="mt-6 rounded-md bg-primary p-2 text-center font-bold text-white transition-all duration-150 hover:text-black">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HomeVolunteerNeedCard;
