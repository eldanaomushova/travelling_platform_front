import React, { useState, useEffect } from "react";
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

export const TourDetailsComponent = () => {
    const { state } = useLocation();
    const { id: placeId, description, type, planName, price, imageUrl } = state || {};
    const navigate = useNavigate();
    const { fetchDataTour, data } = useAboutStore();
    const { fetchUserIdByEmail } = useUserStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [activeDay, setActiveDay] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDataTour(placeId);
    }, [fetchDataTour]);

    const toggleDescription = (dayNumber) => {
        setActiveDay((prev) => (prev === dayNumber ? null : dayNumber));
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.image} style={{ backgroundImage: `url(${imageUrl || lake})` }} />
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
                {data && (
                    <div className={styles.programList}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.programItem}>
                                <Typography
                                    variant="h5"
                                    className={styles.dayNumber}
                                    onClick={() => toggleDescription(item.dayNumber)}
                                >
                                    День {item.dayNumber}: {item.description}
                                    <ArrowIcon
                                        width="30px"
                                        className={`${styles.arrowIcon} ${showDescription ? styles.rotated : ""}`}
                                    />
                                </Typography>
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.descriptionDiv}>
                    <Typography
                        variant="h3"
                        onClick={() => setShowDescription((prev) => !prev)}
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
                    onClick={() => {}}
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
                    onSubmit={() => {}}
                />
            )}
        </div>
    );
};
