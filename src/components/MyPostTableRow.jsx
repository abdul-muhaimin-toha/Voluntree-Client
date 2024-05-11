import { FaPenToSquare, FaTrash } from "react-icons/fa6";

const MyPostTableRow = ({ post, index }) => {
  const { _id, title, category, deadline, location, volunteers_needed } =
    post || {};

  return (
    <tr className="dark:text-white ">
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td className="capitalize">{title}</td>
      <td className="capitalize">{category}</td>
      <td>{deadline}</td>
      <td>{location}</td>
      <td>{volunteers_needed}</td>
      <td className="text-center text-base text-primary">
        <button>
          <FaPenToSquare />
        </button>
      </td>
      <td className="text-center text-base text-primary">
        <button>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyPostTableRow;
