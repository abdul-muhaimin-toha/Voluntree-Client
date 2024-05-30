import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import PropTypes from "prop-types";

const MyRequestPostTableRow = ({ post, index, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, title, category, deadline, location, status, organizer_name } =
    post || {};

  const handleCancelApplication = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4262FF",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-applied-posts/${_id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data.deletedCount > 0) {
              refetch();
              toast("Application canceled successfully", {
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
            toast("Canceling failed, try again!", {
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
    <tr>
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td className="capitalize">{title}</td>
      <td className="capitalize">{category}</td>
      <td>{new Date(deadline).toLocaleDateString()}</td>
      <td>{location}</td>
      <td>{organizer_name}</td>
      <td className="font-extrabold text-primary">{status}</td>
      <td>
        <button
          onClick={handleCancelApplication}
          className=" p-1 py-0.5 text-2xl text-primary"
        >
          <MdCancel />
        </button>
      </td>
    </tr>
  );
};

MyRequestPostTableRow.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default MyRequestPostTableRow;
