import { Helmet, HelmetProvider } from "react-helmet-async";
import useAllPosts from "../hooks/useAllPosts";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { useState } from "react";
import AllOportunityTable from "../components/AllOportunityTable";
import AllPostPageCard from "../components/AllPostPageCard";
import { FaTableList, FaTableCellsLarge } from "react-icons/fa6";
import ErrorElement from "../components/ErrorElement";

const AllVolunteerOpportunities = () => {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("card");
  const [currentPage, setCurrentPage] = useState(0);
  const postPerPage = 6;
  const { data, isPending, isError } = useAllPosts(
    currentPage,
    postPerPage,
    search,
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    setSearch(searchQuery);
  };

  if (isError) {
    return <ErrorElement />;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - All Volunteer Opprtunities</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto  max-w-screen-2xl px-4 ">
        <div className=" my-16 text-center">
          <h2 className="mx-auto  max-w-xl text-4xl  font-black uppercase text-primary lg:text-5xl dark:text-white">
            All Volunteer Opportunities
          </h2>
          <div className="my-8 flex flex-col-reverse items-center justify-center gap-4 md:flex-row md:justify-end">
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <input
                type="text"
                defaultValue={search}
                name="searchQuery"
                className="border border-primary p-1  text-black focus:outline-primary "
              />
              <input
                type="submit"
                value="Search"
                className="cursor-pointer rounded bg-primary px-3 py-2 font-semibold text-white transition-all duration-150"
              />
            </form>
            <div className=" flex  gap-6 text-white md:gap-4 ">
              <button
                onClick={() => setViewMode("card")}
                className="flex items-center gap-3 rounded bg-primary p-2"
              >
                <FaTableCellsLarge className="text-xl" />
                <span className="text-sm">Card View</span>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className="flex items-center gap-3 rounded bg-primary p-2"
              >
                <FaTableList className="text-xl" />
                <span className="text-sm">Table View</span>
              </button>
            </div>
          </div>
        </div>
        {viewMode === "card" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {data?.map((post) => (
              <AllPostPageCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <AllOportunityTable posts={data} />
        )}

        <div className="mb-20 mt-20">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPage={postPerPage}
            search={search}
          />
        </div>
      </div>
    </section>
  );
};

export default AllVolunteerOpportunities;
