import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyPostTable from "../components/MyPostTable";
import MyRequestPostTable from "../components/MyRequestPostTable";

const MyPostPage = () => {
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
                <MyPostTable />
              </TabPanel>
              <TabPanel className="mt-6">
                <MyRequestPostTable />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPostPage;
