import { Link } from "react-router-dom";
import Loader from "./Loader";
import ErrorElement from "./ErrorElement";
import useApplicationToMe from "../hooks/useApplicationToMe";
import VolunteersApplicationTableRow from "./VolunteersApplicationTableRow";

const VolunteersApplicationTable = () => {
  // const { data, isPending, refetch, isError } = useMyAppliedPost();
  const { data, isPending, refetch, isError } = useApplicationToMe();

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
          You haven&apos;t applied anywhere yet!
        </p>
        <Link
          to="/volunteer-opportunities"
          className="text-bold rounded-md bg-primary px-4 py-2 font-bold uppercase text-white"
        >
          Start Applying Now!
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto md:mt-16">
      <table className="table table-xs">
        <thead className="text-primary">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Applicant Name</th>
            <th>Applicant Email</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Decline</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post, index) => (
            <VolunteersApplicationTableRow
              key={post._id}
              refetch={refetch}
              post={post}
              index={index}
            />
          ))}
        </tbody>
        <tfoot className="text-primary ">
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Applicant Name</th>
            <th>Applicant Email</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Decline</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VolunteersApplicationTable;
