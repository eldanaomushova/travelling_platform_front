import { Container } from "@ui/container/Container";
import { Typography } from "@ui/typography/Typography";
import styles from "./landmarkComponent.module.scss";
import { useLandmarkStore } from "../store/useLandmarkStore";
import { Card } from "@ui/cards/smallCard/Card";
import { LandCard } from "@ui/cards/landCard/LandCard";
import { useEffect } from "react";

export const LandmarkComponent = () => {
    const { data, fetchData, loading, error } = useLandmarkStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <Typography variant="h3">Достопримечательности</Typography>
            <div className={styles.cardsWrapper}>
                {data.length > 0 ? (
                    data.map(({ id, title, description, location }) => (
                        <LandCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            location={location}
                            onClick={() => handleClick(id)}
                        />
                    ))
                ) : (
                    <Typography variant="p">No places available.</Typography>
                )}
            </div>
        </Container>
    );
};
