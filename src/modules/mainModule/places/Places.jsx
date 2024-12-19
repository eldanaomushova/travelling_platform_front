import { useEffect } from "react";
import styles from "./places.module.scss";
import { useNavigate } from "react-router-dom";
import { Typography } from "@ui/typography/Typography";
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
        <div className={styles.placesContainer}>
            <div className={styles.titleWrapper}>
                <Typography variant="h1" weight="small" className={styles.title}>
                    А ВЫ ТУТ БЫЛИ?
                </Typography>
            </div>
            <div className={styles.cardsWrapper}>
                {places.slice(0, 3).map((place, index) => {
                    const cardType = index === 0 ? "first" : index === 1 ? "second" : "third";
                    return (
                        <LandCard
                            key={place.id}
                            id={place.id}
                            imageUrl={place.imageUrl}
                            title={place.title}
                            description={place.description}
                            location={place.location}
                            price={place.price}
                            onClick={() => navigate(PATH.landmarks)}
                            type={cardType}
                        />
                    );
                })}
            </div>
        </div>
    );
};
