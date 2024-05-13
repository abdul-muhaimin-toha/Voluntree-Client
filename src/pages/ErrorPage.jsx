import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import errorImage from "../assets/error.svg";

const ErrorPage = () => {
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - Error</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-2">
        <div className="flex h-screen flex-col items-center justify-center bg-white">
          <img src={errorImage} alt="Error image" className="max-w-96" />
          <p className="rounded-sm px-4 py-2 text-xl font-black italic text-black dark:text-white">
            Page Not Found!
          </p>
          <Link
            to={"/"}
            className="mb-12 mt-6 flex items-center justify-center gap-2 rounded-md  font-black uppercase text-black transition duration-150 hover:text-primary dark:text-white "
          >
            <FaRegArrowAltCircleLeft />
            <p>Go Back Home</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
