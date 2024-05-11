import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast("Successfully log out", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast("Log out failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section className="sticky right-0 top-0 z-50 bg-black dark:bg-white">
      <div className="mx-auto max-w-screen-2xl pr-3">
        <nav className="navbar">
          <div className="navbar-start items-center justify-start gap-2 ">
            <div className="drawer z-40 w-12  lg:hidden">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                <div className="w-auto">
                  <div className="flex-none lg:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current text-white transition-all duration-150 hover:text-primary dark:text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-2/3 gap-8 bg-black p-8 tracking-widest text-white md:w-2/6 dark:bg-white dark:text-black">
                  <Link to="/" className="justify-left flex items-center">
                    <h2 className="font-logo text-4xl text-primary">
                      voluntree
                    </h2>
                  </Link>
                  <Link
                    to="/"
                    className=" uppercase outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    to="/volunteer-opportunities"
                    className=" uppercase outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
                  >
                    Volunteer Opportunities
                  </Link>
                  <Link
                    to="/add-volunteer-post"
                    className=" uppercase outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
                  >
                    Add Volunteer Post
                  </Link>

                  {!user && (
                    <Link
                      to="/registration"
                      className="uppercase outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
                    >
                      Registration
                    </Link>
                  )}
                </ul>
              </div>
            </div>
            <Link
              to="/"
              className="flex items-center justify-center gap-3  pl-0 lg:p-2"
            >
              <h2 className=" pb-1 font-logo text-2xl text-primary md:text-4xl">
                voluntree
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-9 text-base font-medium uppercase tracking-widest text-white dark:text-black">
              <Link
                to="/"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/volunteer-opportunities"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
              >
                Volunteer Opportunities
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="outline-none transition-all duration-150 hover:bg-transparent hover:text-primary"
                >
                  My Profile
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-8 w-80 space-y-3  rounded-sm  bg-black p-3 text-white shadow dark:bg-white dark:text-black"
                >
                  <Link
                    to="/add-volunteer-post"
                    className="uppercase hover:text-primary"
                  >
                    Add Volunteer Post
                  </Link>
                  <Link
                    to="/manage-my-posts"
                    className="uppercase hover:text-primary"
                  >
                    Manage My Posts
                  </Link>
                </ul>
              </div>
            </ul>
          </div>
          <div className="navbar-end gap-3 md:gap-4 lg:gap-8">
            <ThemeController />
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar btn btn-circle btn-ghost"
                >
                  <div className="ring-blue-400 h-8 w-8 overflow-hidden rounded-full ring-2">
                    <img
                      className="object-cover"
                      alt="User Image"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-5 w-52 space-y-2  rounded-sm  bg-black p-3 text-white shadow dark:bg-white dark:text-black"
                >
                  <li className="uppercase">
                    <p>{user.displayName}</p>
                  </li>
                  <li>
                    <button
                      className="uppercase hover:text-primary"
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-6">
                <Link
                  to="/sign-in"
                  className="flex items-center justify-center gap-1.5 text-nowrap font-semibold uppercase text-white transition-all duration-150 hover:text-primary dark:text-black"
                >
                  Sign In
                </Link>
                <Link
                  to="registration"
                  className="hidden items-center justify-center gap-1.5 text-nowrap font-semibold uppercase text-white transition-all duration-150 hover:text-primary md:flex dark:text-black"
                >
                  Registration
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
