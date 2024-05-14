import useTestimonials from "../hooks/useTestimonials";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import Loader from "./Loader";
import ErrorElement from "./ErrorElement";

const TestimonialSection = () => {
  const { data, isPending, isError } = useTestimonials();

  if (isError) {
    return <ErrorElement />;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          heading="Client Testimonials"
          subHeading="Discover What Our Satisfied Customers Have to Say About Their Journey with Us"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
          {data?.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
