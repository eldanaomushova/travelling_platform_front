import React, { useEffect } from "react";
import styles from "./tourComponent.module.scss";
import { Container } from "@ui/container/Container";
import { Card } from "@ui/cards/smallCard/Card";
import { Typography } from "@ui/typography/Typography";
import { useTourStore } from "../store/useTourStore";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const TourComponent = () => {
    const { data, fetchData } = useTourStore();
    const navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleClick = (id, planName, startDate, endDate, price) => {
        navigate(`/landmarks/${id}`, {
            state: { planName, startDate, endDate, price },
        });
    };
    return (
        <Container>
            <Typography variant="h3">Available Tours</Typography>
            <div className={styles.tourContainer}>
                {data && data.length > 0 ? (
                    data.map(({ id, planName, startDate, endDate, price }) => (
                        <Card
                            key={id}
                            planName={planName}
                            startDate={formatDate(startDate)}
                            endDate={formatDate(endDate)}
                            price={price}
                            onClick={() => handleClick(id, planName, startDate, endDate, price)}
                        />
                    ))
                ) : (
                    <Typography variant="p">No tours available.</Typography>
                )}
            </div>
        </Container>
    );
};
