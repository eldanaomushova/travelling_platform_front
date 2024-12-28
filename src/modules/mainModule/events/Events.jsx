import { useEffect } from "react";
import styles from "./event.module.scss";
import { Typography } from "@ui/typography/Typography";
import { Line2 } from "@assets/icons/desktop/Line2";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Card } from "@ui/cards/smallCard/Card";
import { useTourStore } from "@modules/tourComponent/store/useTourStore";
import { BigCard } from "@ui/cards/bigCard/BigCard";
import { Review } from "../review/Review";

export const Events = () => {
    const { data, fetchData } = useTourStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    console.log(data);
    if (!data || data.length === 0) {
        return;
    }
    const cardsToRender = [...data.slice(0, 5)];
    while (cardsToRender.length < 5) {
        cardsToRender.push({
            id: `placeholder-${cardsToRender.length}`,
            planName: "Coming Soon",
            startDate: null,
            endDate: null,
            price: null,
            isPlaceholder: true,
        });
    }
    const firstRowCards = cardsToRender.slice(0, 2);
    const secondRowCards = cardsToRender.slice(2);

    return (
        <div className={styles.eventsContainer}>
            <Typography variant="h1" weight="small" className={styles.title}>
                БЛИЖАЙШИЕ
            </Typography>
            <Typography variant="h1" weight="small" className={styles.title2}>
                СОБЫТИЯ
            </Typography>
            <div className={styles.lineWrapper}>
                <Line2 />
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.firstRow}>
                    {firstRowCards.map((event, index) => (
                        <Card
                            key={event.id || `event-${index}`}
                            planName={event.planName}
                            startDate={event.startDate}
                            endDate={event.endDate}
                            price={event.price}
                            onClick={() => navigate(PATH.tours)}
                        />
                    ))}
                </div>
                <div className={styles.secondRow}>
                    {secondRowCards.map((event, index) => (
                        <Card
                            key={event.id || `event-${index + 2}`}
                            planName={event.planName}
                            startDate={event.startDate}
                            endDate={event.endDate}
                            price={event.price}
                            onClick={() => navigate(PATH.tours)}
                        />
                    ))}
                </div>
            </div>
            <Review />
            <div className={styles.cardContainer2}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <BigCard onClick={() => navigate(PATH.tours)} key={`bigcard-${index}`} />
                ))}
            </div>
        </div>
    );
};
