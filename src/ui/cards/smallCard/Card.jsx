import React from "react";
import lake from "../../../assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import styles from "./card.module.scss";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const Card = ({ image = lake, planName, startDate, endDate, price, onClick }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textClass}>
                <div className={styles.textContainer}>
                    <img src={image} alt="Card image" className={styles.imageClass} />
                </div>
            </div>
            <div className={styles.info}>
                <Typography variant="h6" weight="text" className={styles.text}>
                    {planName}
                </Typography>
                <div className={styles.datalink}>
                    <Typography variant="p" className={styles.dataText}>
                        {formatDate(startDate)} - {formatDate(endDate)}
                    </Typography>
                    <Typography variant="h6" weight="text" className={styles.text}>
                        {price} som
                    </Typography>
                </div>
                <button className={styles.button} onClick={onClick}>
                    <Typography variant="p">Book Now</Typography>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
