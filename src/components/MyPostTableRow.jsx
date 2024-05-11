import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyPostTableRow = ({ post, index }) => {
  const { _id, title, category, deadline, location, volunteers_needed } =
    post || {};

  const handleDeletePost = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4262FF",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/volunteers/${_id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data.deletedCount > 0) {
              toast("Post deleted successfully", {
                icon: "👏",
                style: {
                  borderRadius: "10px",
                  background: "#4262FF",
                  color: "#fff",
                },
              });
            }
          })
          .catch(function (error) {
            console.error(error.message);
            toast("Delete failed, try again!", {
              icon: "❌",
              style: {
                borderRadius: "10px",
                background: "#4262FF",
                color: "#fff",
              },
            });
          });
      }
    });
  };

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
          <Link to={`/update-my-post/${_id}`}>
            <FaPenToSquare className="m-2" />
          </Link>
        </button>
      </td>
      <td className="text-center text-base text-primary">
        <button onClick={handleDeletePost}>
          <FaTrash className="m-2" />
        </button>
      </td>
    </tr>
  );
};

export default MyPostTableRow;
