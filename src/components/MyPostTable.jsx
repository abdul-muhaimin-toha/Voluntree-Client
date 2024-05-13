import useMyPosts from "../hooks/useMyPosts";
import MyPostTableRow from "../components/MyPostTableRow";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ErrorElement from "./ErrorElement";

const MyPostTable = () => {
  const { data, isPending, refetch, isError } = useMyPosts();

  if (isError) {
    return <ErrorElement />;
  }

  if (isPending) {
    return <Loader />;
  }

  if (data?.length < 1) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-6">
        <p className="text-center text-xl font-bold">
          You haven&apos;t posted anything yet!
        </p>
        <Link
          to="/add-volunteer-post"
          className="text-bold rounded-md bg-primary px-4 py-2 font-bold uppercase text-white"
        >
          Start Posting Now!
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto md:mt-16">
      <table className="table table-xs">
        <thead className="text-primary ">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Location</th>
            <th>Volunteers Need</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post, index) => (
            <MyPostTableRow
              key={post._id}
              refetch={refetch}
              post={post}
              index={index}
            />
          ))}
        </tbody>
        <tfoot className="text-primary">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Location</th>
            <th>Volunteers Need</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyPostTable;
