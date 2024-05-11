import useMyPosts from "../hooks/useMyPosts";
import MyPostTableRow from "../components/MyPostTableRow";

const MyPostTable = () => {
  const { data } = useMyPosts();

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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post, index) => (
            <MyPostTableRow key={post._id} post={post} index={index} />
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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyPostTable;
