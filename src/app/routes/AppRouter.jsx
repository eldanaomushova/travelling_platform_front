import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATH } from "../../utils/constants/Constants";
import { Layout } from "../layout/Layout";

export const AppRouter = createBrowserRouter([
    {
        path: PATH.home,
        element: <Layout />,
        errorElement: <div>Something went wrong!</div>,
        children: [
            {
                path: PATH.notFound,
                element: <div>Not Found!</div>,
            },
        ],
    },
]);
