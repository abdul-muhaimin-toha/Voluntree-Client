import PropTypes from "prop-types";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="py-20 text-center text-primary md:pt-32 dark:text-white">
      <h2 className="mx-auto max-w-xl text-4xl font-black uppercase lg:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto mt-2 max-w-sm text-lg text-black  md:mt-5 dark:text-white">
        {subHeading}
      </p>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionHeading;
