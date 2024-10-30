import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Layout } from "@app/layout/Layout";
import { Signup } from "@modules/authModule/signup/component/Signup";
import { PrivateRoute } from "@utils/providers/PrivateRoute";
import { HomePage } from "@pages/homePage/HomePage";
import { PlacesPage } from "@pages/places/PlacesPage";
import { Login } from "@modules/AuthModule/Login/Login";

export const AppRouter = (user) => {
    return createBrowserRouter([
        {
            path: PATH.home,
            element: <Layout />,
            errorElement: <div>Something went wrong!</div>,
            children: [
                {
                    path: PATH.home,
                    element: <PrivateRoute element={<HomePage />} user={user} />,
                },
                {
                    path: PATH.places,
                    element: <PrivateRoute element={<PlacesPage />} user={user} />,
                },
                {
                    path: PATH.notFound,
                    element: <div>Not Found!</div>,
                },
            ],
        },
        {
            path: PATH.signup,
            element: <Signup user={user} />,
        },
        {
            path: PATH.login,
            element: <Login />,
        },
    ]);
};
