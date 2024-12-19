import lake from "@assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import styles from "./reviewCard.module.scss";
import { EmptyStarIcon } from "@assets/icons/desktop/EmptyStarIcon";
import { FilledStarIcon } from "@assets/icons/desktop/FilledStarIcon";

export const ReviewCard = ({ image = lake, review, title, name }) => {
    const totalStars = 5;

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textClass}>
                <div className={styles.stars}>
                    {Array.from({ length: totalStars }, (_, index) =>
                        index < review ? (
                            <FilledStarIcon key={index} className={styles.star} />
                        ) : (
                            <EmptyStarIcon key={index} className={styles.star} />
                        )
                    )}
                </div>
                <Typography variant="p" className={styles.review}>
                    {review}.0
                </Typography>
            </div>
            <div className={styles.info}>
                <Typography variant="h5" className={styles.title}>
                    {title}
                </Typography>
                <Typography variant="h6" className={styles.name}>
                    {name}
                </Typography>
            </div>
        </div>
    );
};
