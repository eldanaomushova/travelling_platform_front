import React, { useEffect } from "react";
import { Container } from "@ui/container/Container";
import styles from "./event.module.scss";
import { Typography } from "@ui/typography/Typography";
import { Line2 } from "@assets/icons/desktop/Line2";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Card } from "@ui/cards/smallCard/Card";
import { BigCard } from "@ui/cards/bigCard/BigCard";
import { useTourStore } from "@modules/tourComponent/store/useTourStore";

export const Events = () => {
    const { data, fetchData, loading, error } = useTourStore(); // Assuming data contains events
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleClick = () => {
        navigate(PATH.places);
    };

    if (loading) return <Typography variant="p">Loading...</Typography>;
    if (error) return <Typography variant="p">Error: {error}</Typography>;

    return (
        <Container>
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
                {data && data.length > 0 ? (
                    <div className={styles.firstRow}>
                        {data.slice(0, 3).map((event, index) => (
                            <Card
                                key={event.id}
                                planName={event.planName}
                                startDate={event.startDate}
                                endDate={event.endDate}
                                price={event.price}
                                onClick={handleClick}
                            />
                        ))}
                    </div>
                ) : (
                    <Typography variant="p">No events available.</Typography>
                )}
            </div>
        </Container>
    );
};
