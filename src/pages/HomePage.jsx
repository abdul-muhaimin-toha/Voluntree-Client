import Hero from "../components/Hero";
import QAndN from "../components/QAndN";
import ContactUs from "../components/ContactUs";

import { Helmet, HelmetProvider } from "react-helmet-async";
import VolunteersNeedNow from "../components/VolunteersNeedNow";

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
      <ContactUs />
    </>
  );
};

export default HomePage;
