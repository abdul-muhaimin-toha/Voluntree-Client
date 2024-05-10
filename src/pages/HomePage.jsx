import Hero from "../components/Hero";

import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
    </>
  );
};

export default HomePage;
