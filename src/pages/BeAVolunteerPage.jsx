import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import useSinglePost from "../hooks/useSinglePost";

const BeAVolunteerPage = () => {
  const { id } = useParams();
  const { data } = useSinglePost(id);
  const { user } = useAuth();

  const handleApplyAsVolunteer = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const volunteers_needed = +e.target.volunteers_needed.value;
    const thumbnail_URL = e.target.thumbnail_URL.value;
    const organizer_name = e.target.organizer_name.value;
    const organizer_email = e.target.organizer_email.value;
    const applicant_name = e.target.applicant_name.value;
    const applicant_email = e.target.applicant_email.value;
    const suggestion = e.target.suggestion.value;
    const status = e.target.status.value;

    const newApplyData = {
      postId: data?._id,
      title,
      deadline: data?.deadline,
      category,
      location,
      description,
      volunteers_needed: volunteers_needed - 1,
      thumbnail_URL,
      organizer_name,
      organizer_email,
      applicant_name,
      applicant_email,
      suggestion,
      status,
    };

    axios
      .post("http://localhost:3000/applied-as-a-volunteer", newApplyData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.insertedId) {
          e.target.reset();
          toast("Applied successfully", {
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
        toast("Applying failed, try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - Be A Volunteer</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-screen-md rounded p-6 px-2 shadow-2xl md:p-10">
            <h2 className="mx-auto mb-12 mt-6 max-w-2xl text-center text-4xl font-black uppercase text-primary  md:text-5xl">
              Apply for {data?.title}
            </h2>
            <form
              onSubmit={handleApplyAsVolunteer}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Title</label>
                <input
                  type="text"
                  name="title"
                  disabled
                  defaultValue={data?.title}
                  className="border border-primary p-4  text-black focus:outline-primary "
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Category</label>
                <input
                  type="text"
                  name="category"
                  disabled
                  defaultValue={data?.category}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Thumnail URL</label>
                <input
                  type="text"
                  disabled
                  name="thumbnail_URL"
                  defaultValue={data?.thumbnail_URL}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Location</label>
                <input
                  type="text"
                  disabled
                  name="location"
                  defaultValue={data?.location}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">
                  Number of Volunteers needed
                </label>
                <input
                  type="number"
                  disabled
                  name="volunteers_needed"
                  defaultValue={data?.volunteers_needed}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Deadline</label>
                <input
                  type="text"
                  disabled
                  name="deadline"
                  defaultValue={new Date(data?.deadline).toLocaleDateString()}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-0.5 md:col-span-2">
                <label className="font-bold text-primary">Description</label>
                <textarea
                  name="description"
                  defaultValue={data?.description}
                  placeholder="Description"
                  cols="2"
                  rows="3"
                  className="border border-primary p-4  text-black focus:outline-primary"
                ></textarea>
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Organizer Name</label>
                <input
                  type="text"
                  disabled
                  name="organizer_name"
                  defaultValue={data?.organizer_name}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">
                  Organizer Email
                </label>
                <input
                  type="text"
                  disabled
                  name="organizer_email"
                  defaultValue={data?.organizer_email}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Your Name</label>
                <input
                  type="text"
                  disabled
                  name="applicant_name"
                  defaultValue={user.displayName}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-primary">Your Email</label>
                <input
                  type="text"
                  disabled
                  name="applicant_email"
                  defaultValue={user.email}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-0.5 md:col-span-2">
                <label className="font-bold text-primary">Suggestion</label>
                <textarea
                  name="suggestion"
                  placeholder="Write your suggestion here"
                  cols="2"
                  rows="3"
                  className="border border-primary p-4  text-black focus:outline-primary"
                ></textarea>
              </div>
              <div className="col-span-1 flex flex-col gap-0.5 md:col-span-2">
                <label className="font-bold text-primary">Status</label>
                <input
                  type="text"
                  disabled
                  name="status"
                  defaultValue={"requested"}
                  className="border border-primary p-4  text-black focus:outline-primary"
                />
              </div>
              <input
                type="submit"
                value="Apply Now"
                className="col-span-1 mt-8 cursor-pointer rounded-md bg-primary p-3 font-semibold text-white transition-all duration-150 md:col-span-2 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeAVolunteerPage;
