import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Layout } from "@app/layout/Layout";
import { Signup } from "@modules/authModule/signup/component/Signup";
import { HomePage } from "@pages/homePage/HomePage";
import { PlacesPage } from "@pages/places/PlacesPage";
import { Login } from "@modules/authModule/login/components/Login";

export const AppRouter = (user) => {
    return createBrowserRouter([
        {
            path: PATH.home,
            element: <Layout />,
            errorElement: <div>Something went wrong!</div>,
            children: [
                {
                    path: PATH.home,
                    element: <HomePage />,
                },
                {
                    path: PATH.places,
                    element: <PlacesPage />,
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
