import lake from "../../../assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import styles from "./card.module.scss";
import { Button } from "@ui/buttons/Button";
import { StarIcon } from "@assets/icons/desktop/StarIcon";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}.${month}`;
};
export const Card = ({ image = lake, planName, startDate, endDate, price, onClick }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textClass}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="Card image" className={styles.imageClass} />
                    <div className={styles.ratingContainer}>
                        <div className={styles.ratings}>
                            <Typography variant="h6" className={styles.ratingText}>
                                4.5
                            </Typography>
                            <StarIcon width="32px" height="32px" className={styles.iconStar} />
                        </div>
                    </div>
                </div>
                <div className={styles.typeContainer}>
                    <Typography variant="h6" className={styles.tourCategory}>
                        Семейный тур
                    </Typography>
                    <div className={styles.oneLineText}>
                        <Typography variant="h6" className={styles.tourCategory}>
                            Выбор туристов
                        </Typography>
                        <Typography variant="h6" className={styles.tourType}>
                            Озера
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.datalink}>
                    <Typography variant="h3" className={styles.dataText}>
                        {formatDate(startDate)} - {formatDate(endDate)}
                    </Typography>
                    <ArrowIcon width="32px" className={styles.arrowIcon} />
                </div>
                <Typography variant="h6" className={styles.text}>
                    {planName}
                </Typography>
                <Typography variant="h3" className={styles.price}>
                    {price} сом
                </Typography>
                <Button variant="secondary" variantText="h6" text="Подробнее" onClick={onClick}>
                    <ArrowIcon width="26px" />
                </Button>
            </div>
        </div>
    );
};
