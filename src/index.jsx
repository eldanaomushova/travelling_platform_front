import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./app/routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { auth } from "@utils/config/Config";
import { onAuthStateChanged } from "firebase/auth";
import "./app/styles/index.scss";

const Index = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return <RouterProvider router={AppRouter(user)} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
