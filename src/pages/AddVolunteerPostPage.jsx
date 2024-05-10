import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const AddVolunteerPostPage = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const handleAddPost = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const volunteers_needed = +e.target.number_of_volunteer_needed.value;
    const thumbnail_URL = e.target.thumbnail_URL.value;
    const organizer_name = e.target.organizer_name.value;
    const organizer_email = e.target.organizer_email.value;

    const newAddedPost = {
      title,
      category,
      description,
      location,
      volunteers_needed,
      startDate,
      thumbnail_URL,
      organizer_name,
      organizer_email,
    };

    console.log(newAddedPost);

    axios
      .post("hello", newAddedPost)
      .then(function (response) {
        console.log(response.data);
        if (response.data.insertedId) {
          e.target.reset();
          toast("Posted successfully", {
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
        toast("Posting failed, try again!", {
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
          <title>Voluntree - Add Volunteer Post</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-screen-md rounded p-6 px-2 shadow-2xl md:p-10">
            <h2 className="mx-auto mb-12 mt-6 max-w-2xl text-center text-4xl font-black uppercase text-primary  md:text-5xl">
              Looking For Volunteers!
            </h2>
            <form
              onSubmit={handleAddPost}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <input
                type="text"
                name="title"
                placeholder="Post title"
                className="border border-primary p-4  text-black focus:outline-primary "
              />
              <select
                defaultValue={"landscape painting"}
                name="category"
                className="input-select col-span-1 border border-primary bg-right p-4 text-black focus:outline-primary"
              >
                <option value="Healthcare" className="input-selected">
                  Choose your category
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social service">Social service</option>
                <option value="Animal welfare">Animal welfare</option>
              </select>
              <textarea
                name="description"
                placeholder="Short Description"
                cols="2"
                rows="3"
                className="border border-primary p-4 text-black focus:outline-primary md:col-span-2 "
              ></textarea>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="border border-primary p-4 text-black focus:outline-primary "
              />
              <input
                type="number"
                name="number_of_volunteer_needed"
                placeholder="Number of volunteer needed"
                className="border border-primary p-4 text-black focus:outline-primary "
              />
              <div className="col-span-1 flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full border border-primary p-4 text-black focus:outline-primary"
                />
              </div>

              <input
                type="text"
                name="thumbnail_URL"
                placeholder="Thumbnail URL"
                className="border border-primary p-4 text-black focus:outline-primary"
              />
              <input
                type="text"
                disabled
                defaultValue={user.displayName}
                name="organizer_name"
                placeholder="Organizer name"
                className="border border-primary bg-white p-4 text-black focus:outline-primary "
              />
              <input
                type="text"
                disabled
                defaultValue={user.email}
                name="organizer_email"
                placeholder="Organizer email"
                className="border border-primary bg-white p-4 text-black  focus:outline-primary "
              />

              <input
                type="submit"
                value="Add Post"
                className="col-span-1 mt-8 cursor-pointer rounded-md bg-primary p-3 font-semibold text-white transition-all duration-150 md:col-span-2 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddVolunteerPostPage;
