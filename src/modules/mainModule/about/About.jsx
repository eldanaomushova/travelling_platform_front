import { Line } from "@assets/icons/desktop/Line";
import styles from "./about.module.scss";
import { Container } from "@ui/container/Container";
import { Typography } from "@ui/typography/Typography";

export const About = () => {
    return (
        <Container>
            <Typography variant="h1" weight="small" className={styles.title}>
                {"Исследуй природу | архитектуру-> ".toUpperCase()}
                <br />
                {"и историю кыргызстана".toUpperCase()}
            </Typography>

            <Typography variant="h1" className={styles.about}>
                {"О нас".toUpperCase()}
            </Typography>
            <div className={styles.lineWrapper}>
                <Line />
            </div>
            <Typography variant="p" weight="text" className={styles.goalText}>
                Мы команда “Kyrgyz wonders”, и наша цель ...
            </Typography>
        </Container>
    );
};
