import lake from "@assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import styles from "./teamCard.module.scss";

export const TeamCard = ({ image = lake, name, responsibility, onClick }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textClass}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="Card image" className={styles.imageClass} />
                </div>
            </div>
            <div className={styles.info}>
                <Typography variant="h5" className={styles.name}>
                    {name}
                </Typography>
                <Typography variant="h6" className={styles.responsibility}>
                    {responsibility}
                    <ArrowIcon width="28px" onClick={onClick} />
                </Typography>
            </div>
        </div>
    );
};
