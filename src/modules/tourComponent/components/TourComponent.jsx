import React, { useEffect } from "react";
import styles from "./tourComponent.module.scss";
import { Container } from "@ui/container/Container";
import { Card } from "@ui/cards/smallCard/Card";
import { Typography } from "@ui/typography/Typography";
import { useTourStore } from "../store/useTourStore";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const TourComponent = () => {
    const { data, fetchData, loading, error } = useTourStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleBook = async (tourId) => {
        try {
            const bookingData = { email: userEmail, tourId };
            const response = await requester.post("/api/v1/book", bookingData);
            console.log("Booking successful:", response.data);
            alert("Booking successful!");
        } catch (error) {
            console.error("Error booking tour:", error);
            alert("Failed to book the tour. Please try again.");
        }
    };

    if (loading) return <Typography variant="p">Loading...</Typography>;
    if (error) return <Typography variant="p">Error: {error}</Typography>;

    return (
        <Container>
            <Typography variant="h3">Доступные туры</Typography>
            <div className={styles.tourContainer}>
                {data && data.length > 0 ? (
                    data.map((tour) => (
                        <Card
                            key={tour.id}
                            planName={tour.planName}
                            startDate={formatDate(tour.startDate)}
                            endDate={formatDate(tour.endDate)}
                            price={tour.price}
                            onBook={() => handleBook(tour.id)}
                        />
                    ))
                ) : (
                    <Typography variant="p">No tours available.</Typography>
                )}
            </div>
        </Container>
    );
};
