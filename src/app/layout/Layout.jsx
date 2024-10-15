import React from "react";
import { Header } from "../../modules/Header/Header";
import { Footer } from "../../modules/footer/Footer";
import { Outlet } from "react-router-dom";
import { HomePage } from "../../pages/homePage/HomePage";

export const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
