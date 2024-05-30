import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import PropTypes from "prop-types";

const VolunteersApplicationTableRow = ({ post, index, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, title, status, applicant_name, applicant_email } = post || {};

  const handleAcceptApplication = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4262FF",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, Accept request!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/application-for-my-posts/${_id}`, { status: "Accepted" })
          .then((response) => {
            console.log(response.data);
            if (response.data.modifiedCount > 0) {
              refetch();
              toast("Application Accepted successfully", {
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
            toast("Accepting application failed, try again!", {
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

  const handleCancelApplication = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4262FF",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, Decline request!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/application-for-my-posts/${_id}`, { status: "Declined" })
          .then((response) => {
            console.log(response.data);
            if (response.data.modifiedCount > 0) {
              refetch();
              toast("Application decline successfully", {
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
            toast("Canceling application failed, try again!", {
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
      <td className="capitalize">{applicant_name}</td>
      <td>{applicant_email}</td>
      <td className="font-extrabold text-primary">{status}</td>
      <td>
        {status === "Accepted" ? (
          ""
        ) : (
          <button
            onClick={handleAcceptApplication}
            className=" p-1 py-0.5 text-2xl text-primary"
          >
            <TiTick />
          </button>
        )}
      </td>
      <td>
        {status === "Declined" ? (
          ""
        ) : (
          <button
            onClick={handleCancelApplication}
            className=" p-1 py-0.5 text-2xl text-primary"
          >
            <MdCancel />
          </button>
        )}
      </td>
    </tr>
  );
};

VolunteersApplicationTableRow.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default VolunteersApplicationTableRow;
