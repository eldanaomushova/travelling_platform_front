import { useEffect } from "react";
import styles from "./places.module.scss";
import { useNavigate } from "react-router-dom";
import { Typography } from "@ui/typography/Typography";
import { Container } from "@ui/container/Container";
import { LandCard } from "@ui/cards/landCard/LandCard";
import { useLandmarkStore } from "@modules/landmarkComponent/store/useLandmarkStore";
import { PATH } from "@utils/constants/Constants";

export const Places = () => {
    const { data, fetchData } = useLandmarkStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const places = data || [];

    return (
        <Container>
            <div className={styles.titleWrapper}>
                <Typography variant="h1" className={styles.title}>
                    {"HAVE YOU EVEN BEEN HERE?".toUpperCase()}
                </Typography>
            </div>
            <div className={styles.cardsWrapper}>
                {places.length > 0 ? (
                    places
                        .slice(0, 3)
                        .map(({ id, title, description, location, price, imageUrl }) => (
                            <LandCard
                                key={id}
                                id={id}
                                imageUrl={imageUrl}
                                title={title}
                                description={description}
                                location={location}
                                price={price}
                                onClick={() => navigate(PATH.landmarks)}
                            />
                        ))
                ) : (
                    <Typography variant="p">No places available.</Typography>
                )}
            </div>
        </Container>
    );
};
