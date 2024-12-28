import { About } from "@modules/mainModule/aboutInfo/About";
import { AboutUs } from "@modules/mainModule/aboutUs/components/AboutUs";
import { Events } from "@modules/mainModule/event/Events";
import { MainBlock } from "@modules/mainModule/mainblock/MainBlock";
import { OurTeam } from "@modules/mainModule/ourTeam/components/OurTeam";
import { Places } from "@modules/mainModule/places/Places";
import { TryOurApp } from "@modules/mainModule/tryOurApp/TryOurApp";
import { Container } from "@ui/container/Container";

export const HomePage = () => {
    return (
        <Container>
            <MainBlock />
            <About />
            <Places />
            <Events />
            <TryOurApp />
            <OurTeam />
            <AboutUs />
        </Container>
    );
};
