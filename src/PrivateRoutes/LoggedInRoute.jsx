import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoggedInRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (user) {
    return <Navigate to="/" replace></Navigate>;
  }

  return children;
};

LoggedInRoute.propTypes = {
  children: PropTypes.node,
};

export default LoggedInRoute;
