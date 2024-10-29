import { About } from "@modules/MainModule/about/About";
import { Events } from "@modules/MainModule/events/Events";
import { Places } from "@modules/MainModule/places/Places";
import { TryOurApp } from "@modules/MainModule/tryOurApp/TryOurApp";

export const HomePage = () => {
    return (
        <div>
            <About />
            <Places />
            <Events />
            <TryOurApp />
        </div>
    );
};
