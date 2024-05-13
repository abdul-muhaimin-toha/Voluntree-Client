import errorImage from "../assets/error.svg";

const ErrorElement = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="my-20 flex flex-col items-center justify-center">
          <img src={errorImage} alt="Error image" className=" max-w-56" />
        </div>
      </div>
    </section>
  );
};

export default ErrorElement;
