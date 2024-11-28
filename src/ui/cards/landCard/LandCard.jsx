import styles from "./landCard.module.scss";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { Typography } from "@ui/typography/Typography";

export const LandCard = ({ id, title, imageUrl, description, location, price, onClick }) => {
    return (
        <div className={styles.card} key={id}>
            <div className={styles.imageWrapper}>
                <div>
                    <img src={imageUrl} alt={`${title} image`} className={styles.images} />
                </div>
                <Typography variant="h6" className={styles.numberImage}>
                    {id < 10 ? `0${id}` : id}
                </Typography>
            </div>
            <div className={styles.info}>
                <Typography variant="h6" className={styles.header}>
                    {title}
                </Typography>
                <Typography variant="p" className={styles.text}>
                    {description}
                </Typography>
                <Typography variant="p" className={styles.textlocation}>
                    {location}
                </Typography>
                <Typography variant="h6" className={styles.textlocation}>
                    ${price}
                </Typography>
                <button onClick={onClick} className={styles.button}>
                    <Typography variant="p">Visit now</Typography>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
