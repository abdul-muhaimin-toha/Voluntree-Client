import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/sign-in" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
