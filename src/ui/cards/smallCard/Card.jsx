import React from "react";
import lake from "../../../assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import styles from "./card.module.scss";

export const Card = ({ image = lake, planName, startDate, endDate, price, onBook }) => {
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
                        {startDate} - {endDate}{" "}
                    </Typography>
                    <Typography variant="h6" weight="text" className={styles.text}>
                        {price} сом
                    </Typography>
                </div>
                <button className={styles.button} onClick={onBook}>
                    <Typography variant="p">Бронировать</Typography>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
