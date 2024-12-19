import styles from "./landCard.module.scss";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { Button } from "@ui/buttons/Button";
import { Typography } from "@ui/typography/Typography";

export const LandCard = ({ id, title, imageUrl, description, location, price, onClick, type }) => {
    const cardTypeClass =
        type === "first"
            ? styles.card1
            : type === "second"
              ? styles.card2
              : type === "third"
                ? styles.card3
                : "";

    return (
        <div className={`${styles.card} ${cardTypeClass}`} key={id}>
            <div className={styles.imageWrapper}>
                <div>
                    <img src={imageUrl} alt={`${title} image`} className={styles.images} />
                </div>
                <Typography variant="h5" className={styles.numberImage}>
                    {id < 10 ? `0${id}` : id}
                </Typography>
            </div>
            <div className={styles.info}>
                {type === "second" ? (
                    <Typography variant="h5" className={styles.numberImage}>
                        {id < 10 ? `0${id}` : id}
                    </Typography>
                ) : null}
                <Typography variant="h6" className={styles.header}>
                    {title}
                </Typography>
                <Button
                    onClick={onClick}
                    variant="secondary"
                    className={styles.button}
                    text="Посетить"
                    variantText="h6"
                >
                    <ArrowIcon />
                </Button>
            </div>
        </div>
    );
};
