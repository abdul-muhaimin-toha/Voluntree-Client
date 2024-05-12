import { Helmet, HelmetProvider } from "react-helmet-async";
import useAllPosts from "../hooks/useAllPosts";
import Loader from "../components/Loader";
import AllPostPageCard from "../components/AllPostPageCard";
import Pagination from "../components/Pagination";
import { useState } from "react";

const AllVolunteerOpportunities = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postPerPage = 6;
  const { data, isPending } = useAllPosts(currentPage, postPerPage);

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
      <div className="mx-auto mb-16 max-w-screen-2xl px-4 md:mb-28">
        <div className="py-16 text-center md:pt-20">
          <h2 className="mx-auto max-w-xl text-4xl font-black  uppercase text-primary lg:text-5xl">
            All Volunteer Opportunities
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {data?.map((post) => (
            <AllPostPageCard key={post._id} post={post} />
          ))}
        </div>
        <div className="mt-20">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPage={postPerPage}
          />
        </div>
      </div>
    </section>
  );
};

export default AllVolunteerOpportunities;
