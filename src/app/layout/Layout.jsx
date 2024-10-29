import { Footer } from "@modules/MainModule/footer/Footer";
import { Header } from "@modules/MainModule/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

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
