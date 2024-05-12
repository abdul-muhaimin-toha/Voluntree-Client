import { Link } from "react-router-dom";

const AllOpportunityTableRow = ({ post, index }) => {
  const {
    _id,
    title,
    category,
    deadline,
    location,
    volunteers_needed,
    organizer_name,
  } = post || {};

  return (
    <tr className="">
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td className="capitalize">{title}</td>
      <td className="capitalize">{category}</td>
      <td>{new Date(deadline).toLocaleDateString()}</td>
      <td>{location}</td>
      <td>{volunteers_needed}</td>
      <td>{organizer_name}</td>
      <td>
        <button className="my-2">
          <Link
            to={`/post-details/${_id}`}
            className="text-nowrap bg-primary px-2 py-1 text-white"
          >
            View Details
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default AllOpportunityTableRow;