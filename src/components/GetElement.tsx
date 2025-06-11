import { isAuthenticated } from "@/utils/functions";
import { Navigate } from "react-router-dom";

const GetElement = ({ path }: { path: string }) => {
  const isLoggedIn = isAuthenticated(); // Replace with actual authentication logic
  return isLoggedIn ? (
    <Navigate to={path} replace />
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default GetElement;
