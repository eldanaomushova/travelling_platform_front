import { useEffect } from "react";
import styles from "./places.module.scss";
import { useNavigate } from "react-router-dom";
import { Typography } from "@ui/typography/Typography";
import { Container } from "@ui/container/Container";
import { PATH } from "@utils/constants/Constants";
import { LandCard } from "@ui/cards/landCard/LandCard";
import { useLandmarkStore } from "@modules/landmarkComponent/store/useLandmarkStore";

export const Places = () => {
    const { data, fetchData, loading, error } = useLandmarkStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <Typography variant="p">Loading...</Typography>;
    if (error) return <Typography variant="p">Error: {error}</Typography>;

    const places = data || [];

    return (
        <Container>
            <div className={styles.titleWrapper}>
                <Typography variant="h1" className={styles.title}>
                    {"А вы тут были?".toUpperCase()}
                </Typography>
            </div>
            <div className={styles.cardsWrapper}>
                {places.length > 0 ? (
                    places
                        .slice(0, 3)
                        .map(({ id, title, description, location }) => (
                            <LandCard
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                location={location}
                            />
                        ))
                ) : (
                    <Typography variant="p">No places available.</Typography>
                )}
            </div>
        </Container>
    );
};
