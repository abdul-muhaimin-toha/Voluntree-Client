import { MdCancel } from "react-icons/md";

const MyRequestPostTableRow = ({ post, index }) => {
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
    <tr className="dark:text-white ">
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td className="capitalize">{title}</td>
      <td className="capitalize">{category}</td>
      <td>{deadline}</td>
      <td>{location}</td>
      <td>{volunteers_needed}</td>
      <td>{organizer_name}</td>
      <td>
        <button className=" p-1 py-0.5 text-2xl text-primary">
          <MdCancel />
        </button>
      </td>
    </tr>
  );
};

export default MyRequestPostTableRow;
