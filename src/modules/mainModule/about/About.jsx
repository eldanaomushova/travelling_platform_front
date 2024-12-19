import { Line } from "@assets/icons/desktop/Line";
import styles from "./about.module.scss";
import { Typography } from "@ui/typography/Typography";

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Typography variant="h1" weight="small" className={styles.title}>
                ИССЛЕДУЙ ПРИРОДУ | АРХИТЕКТУРУ &rarr; И&nbsp;ИСТОРИЮ КЫРГЫЗСТАНА
                <br />
            </Typography>
            <Typography variant="h1" weight="small" className={styles.about}>
                О НАС
            </Typography>
            <div className={styles.lineWrapper}>
                <Line />
            </div>
            <Typography variant="h6" className={styles.goalText}>
                Мы команда “Kyrgyz wonders”, и наша цель ...
            </Typography>
        </div>
    );
};
