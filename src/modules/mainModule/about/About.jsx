import { Line } from "@assets/icons/desktop/Line";
import styles from "./about.module.scss";
import { Container } from "@ui/container/Container";
import { Typography } from "@ui/typography/Typography";

export const About = () => {
    return (
        <Container>
            <Typography variant="h1" weight="small" className={styles.title}>
                {"Explore Nature | Architecture -> ".toUpperCase()}
                <br />
                {"And The History of Kyrgyzstan".toUpperCase()}
            </Typography>

            <Typography variant="h1" className={styles.about}>
                {"About Us".toUpperCase()}
            </Typography>
            <div className={styles.lineWrapper}>
                <Line />
            </div>
            <Typography variant="p" weight="text" className={styles.goalText}>
                We are the team "Kyrgyz Wonders," and our goal is to showcase the breathtaking
                beauty of Kyrgyzstan, its rich culture, and unique landmarks to travelers from
                around the world. Through unforgettable tours and authentic experiences, we aim to
                inspire people to explore the wonders of our homeland and create lifelong memories.
            </Typography>
        </Container>
    );
};
