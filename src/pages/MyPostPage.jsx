import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMyPosts from "../hooks/useMyPosts";
import MyPostTableRow from "../components/MyPostTableRow";

const MyPostPage = () => {
  const { data } = useMyPosts();

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-xl rounded p-6  shadow-xl md:p-10">
            <h2 className="mx-auto max-w-xl text-center text-4xl font-semibold uppercase text-black lg:text-5xl dark:text-white">
              Manage My Post
            </h2>
            <Tabs className="mt-16">
              <TabList className="border-b border-black text-center text-lg font-medium">
                <Tab>My Posts</Tab>
                <Tab>My Requested Posts</Tab>
              </TabList>

              <TabPanel className="mt-6">
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
                        <MyPostTableRow
                          key={post._id}
                          post={post}
                          index={index}
                        />
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
              </TabPanel>
              <TabPanel className="mt-6">
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
                        <MyPostTableRow
                          key={post._id}
                          post={post}
                          index={index}
                        />
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
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPostPage;
