import { ImageComponent } from "@modules/tourComponent/components/image/ImageComponent";
import { TourComponent } from "@modules/tourComponent/components/tour/TourComponent";
import { Container } from "@ui/container/Container";

export const TourPage = () => {
    return (
        <Container>
            <ImageComponent />
            <TourComponent />
        </Container>
    );
};
