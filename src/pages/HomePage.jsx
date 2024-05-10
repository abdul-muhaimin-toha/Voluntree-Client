import Hero from "../components/Hero";

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
    </>
  );
};

export default HomePage;
