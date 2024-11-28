import React, { useState } from "react";
import styles from "./aboutPlaceComponent.module.scss";
import lake from "@assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { PATH } from "@utils/constants/Constants";
import { useAboutStore } from "../store/useAboutStore";
import { useUserStore } from "@stores/useUserStore";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalInput } from "@ui/modalInput/ModalInput";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const AboutPlaceComponent = () => {
    const { state } = useLocation();
    const {
        id: placeId,
        title,
        description,
        type,
        planName,
        startDate,
        endDate,
        price,
        landmarks,
        imageUrl,
    } = state || {};
    const navigate = useNavigate();
    const { createBookingTour, createBookingTravel } = useAboutStore();
    const { fetchUserIdByEmail } = useUserStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBooking = async () => {
        try {
            const currentUser = localStorage.getItem("email");
            if (!currentUser) {
                window.alert("Please log in first before booking!");
                navigate(PATH.signup);
                return;
            }

            const userId = await fetchUserIdByEmail(currentUser);
            if (!userId) {
                throw new Error("Unable to retrieve user ID.");
            }

            if (type === "tour") {
                const userConfirmed = window.confirm("Are you sure you want to book this tour?");
                if (!userConfirmed) return;

                await createBookingTour(userId, placeId);
                window.alert("Tour booked successfully!");
                navigate(PATH.home);
            } else {
                setIsModalOpen(true);
            }
        } catch (error) {
            window.alert(`Booking failed: ${error.message}`);
        }
    };

    const handleModalSubmit = async ({ travelName, startDate, endDate }) => {
        const formatDateTime = (date) => {
            const dt = new Date(date);
            const year = dt.getFullYear();
            const month = String(dt.getMonth() + 1).padStart(2, "0");
            const day = String(dt.getDate()).padStart(2, "0");
            const hours = "23";
            const minutes = "59";
            const seconds = "59";
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        };
        const formattedStartDate = formatDateTime(startDate);
        const formattedEndDate = formatDateTime(endDate);
        try {
            const currentUser = localStorage.getItem("email");
            const userId = await fetchUserIdByEmail(currentUser);
            await createBookingTravel(
                userId,
                travelName,
                formattedStartDate,
                formattedEndDate,
                placeId
            );
            window.alert("Travel booked successfully. We will contact you soon!");
            navigate(PATH.home);
        } catch (error) {
            window.alert(`Booking failed: ${error.message}`);
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.detailsWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={imageUrl || lake} alt={`${title} image`} className={styles.image} />
                </div>
                <div className={styles.details}>
                    <Typography variant="h2">
                        {title} {planName}
                    </Typography>
                    <Typography variant="p">{description}</Typography>
                    {startDate && (
                        <Typography variant="p">
                            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                        </Typography>
                    )}
                    <Typography variant="h6">{`$ ${price}`}</Typography>
                    {landmarks && landmarks.length > 0 && (
                        <div className={styles.landmarks}>
                            <Typography variant="h6">Landmarks of the tour</Typography>
                            <ul>
                                {landmarks.map((landmark) => (
                                    <li key={landmark.id} className={styles.landmarkItem}>
                                        <Typography variant="p">{landmark.title}</Typography>
                                        <Typography variant="p">{landmark.description}</Typography>
                                        <Typography variant="p">{`Location: ${landmark.location}`}</Typography>
                                        <Typography variant="p">{`Price: $${landmark.price}`}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <Button
                    variant="secondary"
                    text="Book"
                    onClick={handleBooking}
                    width="100%"
                    height="60px"
                    padding="0 40px"
                    className={styles.buttonPrimary}
                >
                    <ArrowIcon color="var(--black)" width="20px" />
                </Button>
            </div>
            {isModalOpen && (
                <ModalInput
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleModalSubmit}
                />
            )}
        </div>
    );
};
