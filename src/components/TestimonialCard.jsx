import PropTypes from "prop-types";

const TestimonialCard = ({ testimonial }) => {
  const { customer_name, designation, image_url } = testimonial;
  return (
    <div className="mx-4 my-6 flex  flex-col overflow-hidden rounded-lg border border-primary shadow-2xl">
      <div className="flex-grow rounded-t-lg px-4 py-12 sm:px-8 md:px-12">
        <p className="relative  px-6 py-1 text-center text-lg italic text-primary dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="h-8 w-8 text-primary dark:text-white"
          >
            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          {testimonial.testimonial}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="absolute right-0 h-8 w-8 text-primary dark:text-white"
          >
            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
          </svg>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-b-lg bg-primary p-8 text-white">
        <img
          src={image_url}
          alt={customer_name}
          className="bg-gray-500 -mt-16 mb-2 h-16 w-16 rounded-full  bg-cover bg-center object-cover"
        />
        <p className="text-xl font-semibold leading-tight">{customer_name}</p>
        <p className="text-sm uppercase">{designation}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object,
};

export default TestimonialCard;
