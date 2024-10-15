import React from "react";
import styles from "./about.module.scss";
import { Typography } from "../../ui/typography/Typography";
import line from "../../assets/icons/line.svg";
import { Container } from "../../ui/container/Container";

export const About = () => {
    return (
        <Container>
            <Typography variant="h1" weight="small" className={styles.title}>
                {"Исследуй природу | архитектуру -> и история кыргызстана".toUpperCase()}
            </Typography>
            <Typography variant="h1" className={styles.about}>
                {"О нас".toUpperCase()}
            </Typography>
            <div className={styles.lineWrapper}>
                <img src={line} alt="line" />
            </div>
            <Typography variant="p" weight="text" className={styles.goalText}>
                Мы команда “Kyrgyz wonders”, и наша цель ...
            </Typography>
        </Container>
    );
};
