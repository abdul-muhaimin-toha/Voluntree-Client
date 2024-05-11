import useSinglePost from "../hooks/useSinglePost";
import { Link, useParams } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Loader from "../components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";

const VolunteerPostDetailsPage = () => {
  const { id } = useParams();
  const { data, isPending } = useSinglePost(id);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - Volunteer Post Details</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-20">
          <h2 className="mx-auto mb-12  max-w-4xl text-center text-4xl font-black uppercase text-primary md:text-5xl ">
            Details of {data?.title}
          </h2>
          <div className="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            <img
              src={data?.thumbnail_URL}
              alt="Post image"
              className="col-span-1 w-full border-spacing-4 rounded-lg object-cover shadow-lg ring-4 ring-primary"
            />
            <div className="col-span-1 flex rounded-lg bg-cover shadow-lg lg:col-span-2">
              <div className="flex grow flex-col gap-6 rounded-lg bg-[#000]  p-4 md:gap-10 lg:p-8">
                <div className="flex flex-col items-start justify-center gap-3">
                  <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3">
                    <h2 className="text-xl font-bold uppercase text-white">
                      {data?.title}
                    </h2>
                    <div className="flex gap-4">
                      <h4 className="rounded-full bg-white px-2 py-1 text-xs font-semibold capitalize text-black">
                        {data?.category}
                      </h4>
                      <h4 className="rounded-full bg-white px-2 py-1 text-xs font-semibold capitalize text-black">
                        {data?.location}
                      </h4>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-center  justify-between gap-3">
                    <p className="my-3 text-xs text-white">
                      {data?.description}
                    </p>
                    <div className="my-3 flex flex-wrap gap-4">
                      <p className=" rounded-sm bg-white px-2 py-1 text-xs capitalize italic text-black">
                        Volunteers Needed: {data?.volunteers_needed}
                      </p>
                      <p className=" rounded-sm bg-white px-2 py-1 text-xs capitalize italic text-black ">
                        Deadline:{" "}
                        {new Date(data?.deadline).toLocaleDateString()}
                      </p>
                      <p className=" rounded-sm bg-primary px-2 py-1 text-xs capitalize italic text-white ">
                        Organizer Name: {data?.organizer_name}
                      </p>
                      <p className=" rounded-sm bg-primary px-2 py-1 text-xs capitalize italic text-white ">
                        Organizer Email: {data?.organizer_email}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/be-a-volunteer/${id}`}
                    className="w-full bg-primary p-3 text-center font-bold uppercase text-white"
                  >
                    Be a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="mt-8 flex items-center justify-center gap-4 rounded-md px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-[#5FA4E6] md:self-end dark:text-white"
          >
            <FaRegArrowAltCircleLeft />
            <p>Go Back Home</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerPostDetailsPage;
