import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyPostTable from "../components/MyPostTable";
import MyRequestPostTable from "../components/MyRequestPostTable";
import { Helmet, HelmetProvider } from "react-helmet-async";
import VolunteersApplicationTable from "../components/VolunteersApplicationTable";

const MyPostPage = () => {
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree -Manage My Post</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-xl rounded p-6  shadow-xl md:p-10 dark:bg-white">
            <h2 className="mx-auto max-w-xl text-center text-4xl font-black  uppercase text-primary lg:text-5xl ">
              Manage My Post
            </h2>
            <Tabs className=" mt-16">
              <TabList className="border-b border-black text-center text-lg font-medium ">
                <Tab>
                  <span className="text-xs md:text-lg">My Posts</span>
                </Tab>
                <Tab>
                  <span className="text-xs md:text-lg">
                    Volunteer&apos;s Application to My Posts
                  </span>
                </Tab>
                <Tab>
                  <span className="text-xs md:text-lg">My Requested Posts</span>
                </Tab>
              </TabList>

              <TabPanel className="mt-6">
                <MyPostTable />
              </TabPanel>
              <TabPanel className="mt-6">
                <VolunteersApplicationTable />
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
