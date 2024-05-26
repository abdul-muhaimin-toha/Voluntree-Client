import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Helmet, HelmetProvider } from "react-helmet-async";
import generateRandomPassword from "../utils/generateRandomPass";

const RegistrationPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const { logout, createNewUser, googleLogin, githubLogin } = useAuth();

  const handleRandomPass = () => {
    setIsPassVisible(true);
    const randomPass = generateRandomPassword();
    setValue("password", randomPass);
  };

  const handleFormSubmit = (data) => {
    const { name, email, photoURL, password } = data;
    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error.message);
          });
        logout();
        navigate(location?.state ? location.state : "/sign-in");
        reset();
        toast("Profile Created successfully", {
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
        toast("Registration failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
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
        toast("Sign in with google failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
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
        toast("Sign in with github failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#4262FF",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Voluntree - Registration</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-screen-md rounded p-6 px-2  shadow-2xl md:p-10">
            <h2 className="mx-auto mb-12 mt-6 max-w-2xl text-center text-4xl font-black uppercase text-primary md:text-5xl dark:text-white">
              Create new account!
            </h2>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col  text-black"
            >
              <input
                type="name"
                placeholder="Enter your Name"
                className=" border  border-[#afaeae] p-4 focus:outline-[#665DCD] dark:border-[#c4c4c4]"
                {...register("name", {
                  required: {
                    value: true,
                    message: "You must fill name field",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white ">
                  {errors.name.message}
                </p>
              )}
              <input
                type="email"
                placeholder="Enter your email"
                className=" mt-4 border border-[#afaeae] p-4 focus:outline-[#665DCD] dark:border-[#c4c4c4]"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must fill email field",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white">
                  {errors.email.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Enter your photo url"
                className=" mt-4 border border-[#afaeae] p-4 focus:outline-[#665DCD] dark:border-[#c4c4c4]"
                {...register("photoURL", {
                  required: {
                    value: true,
                    message: "You must give an image link",
                  },
                })}
              />
              {errors.photoURL && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white">
                  {errors.photoURL.message}
                </p>
              )}
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-4 w-full border border-[#afaeae] p-4 focus:outline-[#665DCD] dark:border-[#c4c4c4]"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "You must fill password field",
                    },
                    minLength: {
                      value: 8,
                      message:
                        "Your password should be atleast 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "Your password should contain both uppercase and lowercase character",
                    },
                  })}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? (
                    <FaEyeSlash className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-[#665DCD] " />
                  ) : (
                    <FaEye className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-[#665DCD] " />
                  )}
                </p>
              </div>

              {errors.password && (
                <p className="text-red-900 px-1 pt-2 text-sm dark:text-white ">
                  {errors.password.message}
                </p>
              )}
              <p
                onClick={handleRandomPass}
                className="mt-4 flex w-6/12 cursor-pointer items-center justify-center rounded-full border-2 border-primary bg-transparent p-1.5 text-xs text-primary md:w-3/12 md:text-sm dark:text-white"
              >
                Generate Password
              </p>
              <input
                type="submit"
                value="Sign Up"
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
              Already have an account?
              <Link to="/sign-in" className="ml-2 text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
