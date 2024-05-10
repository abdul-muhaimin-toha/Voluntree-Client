const Loader = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex min-h-[calc(100vh-362px)] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-black dark:text-white"></span>
        </div>
      </div>
    </section>
  );
};

export default Loader;
