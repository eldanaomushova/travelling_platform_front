import { Navigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";

export const PrivateRoute = ({ element, user }) => {
    const isAuthenticated = Boolean(user);
    return isAuthenticated ? element : <Navigate to={PATH.home} />;
};
