import { Footer } from "@modules/footer/Footer";
import { Header } from "@modules/header/Header";
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
