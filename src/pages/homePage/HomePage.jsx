import { About } from "@modules/MainModule/about/About";
import { Events } from "@modules/MainModule/events/Events";
import { Places } from "@modules/MainModule/places/Places";
import { MainBlock } from "@modules/mainModule/mainblock/MainBlock";

export const HomePage = () => {
    return (
        <div>
            <MainBlock />
            <About />
            <Places />
            <Events />
        </div>
    );
};
