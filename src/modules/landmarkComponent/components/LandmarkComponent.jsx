import { Container } from "@ui/container/Container";
import { Typography } from "@ui/typography/Typography";
import styles from "./landmarkComponent.module.scss";
import { useLandmarkStore } from "../store/useLandmarkStore";
import { LandCard } from "@ui/cards/landCard/LandCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LandmarkComponent = () => {
    const { data, fetchData } = useLandmarkStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleClick = (id, title, description, location) => {
        navigate(`/landmarks/${id}`, {
            state: { title, description, location },
        });
    };

    return (
        <Container>
            <Typography variant="h3">Достопримечательности</Typography>
            <div className={styles.cardsWrapper}>
                {data?.length > 0 ? (
                    data.map(({ id, title, description, location }) => (
                        <LandCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            location={location}
                            onClick={() => handleClick(id, title, description, location)}
                        />
                    ))
                ) : (
                    <Typography variant="p">No places available.</Typography>
                )}
            </div>
        </Container>
    );
};
