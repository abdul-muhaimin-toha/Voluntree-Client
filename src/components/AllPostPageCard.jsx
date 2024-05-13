import { Link } from "react-router-dom";
import defaultThumbnail from "../assets/image-not-available.webp";

const AllPostPageCard = ({ post }) => {
  const { _id, title, thumbnail_URL, deadline, category, organizer_name } =
    post || {};

  return (
    <div className="overflow-hidden rounded-md bg-[#fff] shadow-xl dark:bg-[#000]">
      <img
        src={thumbnail_URL || defaultThumbnail}
        alt=""
        className="h-72 w-full rounded-t-md object-cover"
      />
      <div className=" flex flex-col p-4 md:p-6 ">
        <h4 className="min-h-16 text-2xl  font-black text-black dark:text-white">
          {title || "Unknown"}
        </h4>
        <div className="mt-2 flex min-h-16 flex-wrap items-center gap-4 text-xs">
          <p className="self-start rounded-sm bg-primary p-1.5 capitalize  text-white">
            Category: {category}
          </p>
          <p className="self-start rounded-sm bg-primary p-1.5  text-white">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>

          <p className="self-start rounded-sm bg-primary p-1.5  text-white">
            Organizer: {organizer_name}
          </p>
        </div>
        <Link
          to={`/post-details/${_id}`}
          className="mt-4 rounded-md bg-primary p-2 text-center font-bold text-white transition-all duration-150 hover:text-black"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllPostPageCard;
