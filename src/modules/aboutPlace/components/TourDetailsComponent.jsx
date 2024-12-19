import React, { useState } from "react";
import styles from "./tourDetailsComponent.module.scss";
import lake from "@assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { PATH } from "@utils/constants/Constants";
import { useAboutStore } from "../store/useAboutStore";
import { useUserStore } from "@stores/useUserStore";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalInput } from "@ui/modalInput/ModalInput";
import { SmileTourIcon } from "@assets/icons/desktop/SmileTourIcon";
import { ActivityTourIcon } from "@assets/icons/desktop/ActivityTourIcon";
import { Review } from "@modules/mainModule/review/Review";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const TourDetailsComponent = () => {
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
    const [showDescription, setShowDescription] = useState(false); // Toggle state for description visibility

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

    const handleOpen = () => {
        setShowDescription((prev) => !prev); // Toggle description visibility
    };

    return (
        <div className={styles.container}>
            <div className={styles.image} />
            <div className={styles.detailsWrapper}>
                <Typography variant="h1" weight="small">
                    {planName}
                </Typography>
                <Typography variant="h3">Программа</Typography>
                <Typography variant="h6" className={styles.programText}>
                    <ArrowIcon width="30px" className={styles.arrowIconLeft} />
                    Данный тур имеет возрастное ограничение 18+
                </Typography>
                <Typography variant="h6" className={styles.programText}>
                    <ArrowIcon width="30px" className={styles.arrowIconLeft} />
                    Язык тура: русский
                </Typography>
                <div className={styles.descriptionDiv}>
                    <Typography
                        variant="h3"
                        onClick={handleOpen}
                        className={styles.descriptionText}
                    >
                        Краткое описание тура
                        <ArrowIcon
                            width="30px"
                            className={`${styles.arrowIcon} ${showDescription ? styles.rotated : ""}`}
                        />
                    </Typography>
                    {showDescription && (
                        <div className={styles.descriptionContent}>
                            <Typography variant="p">
                                {description || "Описание отсутствует."}
                            </Typography>
                        </div>
                    )}
                </div>
                <div className={styles.aboutTourDiv}>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        <SmileTourIcon />
                        Уровень комфорта
                    </Typography>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        хороший
                    </Typography>
                </div>
                <div className={styles.aboutTourDiv}>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        <ActivityTourIcon />
                        Уровень активности
                    </Typography>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        хороший
                    </Typography>
                </div>
                <div className={styles.aboutTourDiv}>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        Стоимость тура:
                    </Typography>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        {price}
                    </Typography>
                </div>
                <div className={styles.aboutTourDiv}>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        Телефон для связи
                    </Typography>
                    <Typography variant="h3" className={styles.aboutTourText}>
                        +999 999 999
                    </Typography>
                </div>

                <Button
                    variant="secondary"
                    text="Присоединиться"
                    variantText="h4"
                    onClick={handleBooking}
                    width="100%"
                    height="60px"
                    padding="0 40px"
                    className={styles.buttonPrimary}
                >
                    <ArrowIcon color="var(--black)" width="20px" />
                </Button>
            </div>
            <Review />
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
