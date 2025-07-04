import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const isTokenValid = (token) => {
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token && isTokenValid(token) ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
