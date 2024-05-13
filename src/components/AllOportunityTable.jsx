import AllOpportunityTableRow from "./AllOpportunityTableRow";
import PropTypes from "prop-types";

const AllOportunityTable = ({ posts }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-screen-2xl rounded p-6  shadow-xl md:p-10 dark:bg-white">
          <div className=" overflow-x-auto">
            <table className="table table-xs">
              <thead className="text-primary ">
                <tr>
                  <th></th>
                  <th>Post Title</th>
                  <th>Category</th>
                  <th>Deadline</th>
                  <th>Location</th>
                  <th>Volunteers Need</th>
                  <th>Organizer Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((post, index) => (
                  <AllOpportunityTableRow
                    key={post._id}
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
                  <th>Organizer Name</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

AllOportunityTable.propTypes = {
  posts: PropTypes.array,
};

export default AllOportunityTable;
