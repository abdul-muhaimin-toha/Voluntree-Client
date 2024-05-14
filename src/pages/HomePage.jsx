import Hero from "../components/Hero";
import QAndN from "../components/QAndN";
import ContactUs from "../components/ContactUs";

import { Helmet, HelmetProvider } from "react-helmet-async";
import VolunteersNeedNow from "../components/VolunteersNeedNow";
import TestimonialSection from "../components/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
      <VolunteersNeedNow />
      <QAndN />
      <TestimonialSection />
      <ContactUs />
    </>
  );
};

export default HomePage;
