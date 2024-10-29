import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import lake from "../../../assets/images/lake.webp";
import { Typography } from "@ui/typography/Typography";
import styles from "./card.module.scss";

export const Card = ({ onClick }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.datalink}>
                <Typography variant="h4">03.10 - 05.10</Typography>
                <ArrowIcon onClick={onClick} width="35px" height="35px" />
            </div>
            <div className={styles.textClass}>
                <div className={styles.textContainer}>
                    <Typography variant="p" weight="text" className={styles.text}>
                        Поездка на озеро Иссык-Куль
                    </Typography>
                    <div>
                        <img src={lake} alt="Card image" className={styles.imageClass} />
                    </div>
                </div>
            </div>
        </div>
    );
};
