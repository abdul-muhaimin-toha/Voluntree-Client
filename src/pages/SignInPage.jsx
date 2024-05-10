import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle, FaGithub } from "react-icons/fa";

import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SignInPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setIsLoading, emailPassLogin, googleLogin, githubLogin } = useAuth();

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    emailPassLogin(email, password)
      .then(() => {
        reset();
        navigate(location?.state ? location.state : "/");

        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Email and password doesn't matched", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully signed in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Google sign in failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
    setIsLoading(false);
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully signed in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Github sign in failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
    setIsLoading(false);
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - Sign In</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-screen-md rounded p-6 px-2 shadow-2xl md:p-10">
            <h2 className="mx-auto mb-12 mt-6 max-w-2xl text-center text-4xl font-black uppercase text-primary  md:text-5xl">
              Sign in now!
            </h2>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col"
            >
              <input
                defaultValue="demouser@gmail.com"
                type="email"
                placeholder="Enter your email"
                className=" border p-4 text-black focus:outline-primary dark:border-primary"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must fill email field",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white  ">
                  {errors.email.message}
                </p>
              )}
              <div className="relative">
                <input
                  defaultValue="Demo123123"
                  type={isPassVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-4 w-full border p-4 text-black focus:outline-primary  dark:border-primary "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "You must fill password field",
                    },
                  })}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? (
                    <FaEyeSlash className="absolute right-5 top-2/3 -translate-y-1/2 text-2xl text-black focus:outline-primary  " />
                  ) : (
                    <FaEye className="absolute right-5 top-2/3 -translate-y-1/2 text-2xl  text-primary " />
                  )}
                </p>
              </div>
              {errors.password && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white">
                  {errors.password.message}
                </p>
              )}
              <input
                type="submit"
                value="Sign In"
                className="mt-8 cursor-pointer rounded-md bg-primary p-3 font-semibold text-white transition-all duration-150"
              />
            </form>
            <div className="mt-3 flex flex-col gap-3 md:mt-4 md:flex-row">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center  gap-3 rounded-md bg-black p-3 text-sm font-semibold text-white transition-all duration-150 hover:text-primary md:w-1/2 dark:bg-white dark:text-black"
              >
                <FaGoogle className="text-xl" />
                <span>Join With Google</span>
              </button>
              <button
                onClick={handleGithubLogin}
                className="flex w-full items-center justify-center  gap-3 rounded-md bg-black p-3 text-sm font-semibold text-white transition-all duration-150 hover:text-primary md:w-1/2 dark:bg-white dark:text-black"
              >
                <FaGithub className="text-xl" />
                <span>Join With Github</span>
              </button>
            </div>
            <p className="mt-6 text-center font-medium text-black dark:text-white">
              Dont have an account?
              <Link
                to="/registration"
                className="ml-2 text-primary hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
