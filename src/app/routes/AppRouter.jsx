import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Layout } from "@app/layout/Layout";
import { Signup } from "@modules/authModule/signup/component/Signup";
import { HomePage } from "@pages/homePage/HomePage";
import { Login } from "@modules/authModule/login/components/Login";
import { TourPage } from "@pages/tourPage/TourPage";
import { LandmarkPage } from "@pages/landmarkPage/LandmarkPage";
import { AboutPlacePage } from "@pages/aboutPlacePage/AboutPlacePage";

export const AppRouter = (user) => {
    return createBrowserRouter([
        {
            path: PATH.home,
            element: <Layout />,
            errorElement: <div>Ошибка сервера!</div>,
            children: [
                {
                    path: PATH.home,
                    element: <HomePage />,
                },
                {
                    path: PATH.tours,
                    element: <TourPage />,
                },
                {
                    path: PATH.landmarks,
                    element: <LandmarkPage />,
                },
                {
                    path: `${PATH.landmarks}/:id`,
                    element: <AboutPlacePage />,
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
