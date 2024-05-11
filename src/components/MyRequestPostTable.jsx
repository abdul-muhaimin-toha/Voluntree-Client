import useMyAppliedPost from "../hooks/useMyApplirdPost";
import MyRequestPostTableRow from "./MyRequestPostTableRow";

const MyRequestPostTable = () => {
  const { data } = useMyAppliedPost();
  console.log(data);

  return (
    <div className="mt-6 overflow-x-auto md:mt-16">
      <table className="table table-xs">
        <thead className="text-primary dark:text-white">
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
            <MyRequestPostTableRow key={post._id} post={post} index={index} />
          ))}
        </tbody>
        <tfoot className="text-primary dark:text-white">
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
