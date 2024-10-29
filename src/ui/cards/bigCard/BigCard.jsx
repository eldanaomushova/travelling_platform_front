import { Typography } from "@ui/typography/Typography";
import styles from "./bigCard.module.scss";
import lakeMountain from "../../../assets/images/lakeMountainer.webp";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";

export const BigCard = ({ onClick }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textClass}>
                <div className={styles.textContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={lakeMountain} alt="Card image" className={styles.imageClass} />
                    </div>
                    <div className={styles.textWrapper}>
                        <Typography variant="p" weight="text" className={styles.text}>
                            Долина Арашан
                        </Typography>
                        <ArrowIcon onClick={onClick} width="25px" height="25px" />
                    </div>
                </div>
            </div>
        </div>
    );
};
