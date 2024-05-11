import { Link } from "react-router-dom";
import useMyAppliedPost from "../hooks/useMyApplirdPost";
import MyRequestPostTableRow from "./MyRequestPostTableRow";
import Loader from "./Loader";

const MyRequestPostTable = () => {
  const { data, isPending, refetch } = useMyAppliedPost();

  if (isPending) {
    return <Loader />;
  }

  if (data?.length < 1) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-6">
        <p className="text-center text-xl font-bold">
          You haven't applied anywhere yet!
        </p>
        <Link className="text-bold rounded-md bg-primary px-4 py-2 font-bold uppercase text-white">
          Start Applying Now!
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto md:mt-16">
      <table className="table table-xs">
        <thead className="text-primary">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Location</th>
            <th>Volunteers Need</th>
            <th>Organizer's Name</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post, index) => (
            <MyRequestPostTableRow
              key={post._id}
              refetch={refetch}
              post={post}
              index={index}
            />
          ))}
        </tbody>
        <tfoot className="text-primary ">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Location</th>
            <th>Volunteers Need</th>
            <th>Organizer's Name</th>
            <th>Cancel</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyRequestPostTable;
