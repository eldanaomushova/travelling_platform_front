import styles from "./landCard.module.scss";
import mountains from "@assets/images/mountains.webp";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { Typography } from "@ui/typography/Typography";
import { PATH } from "@utils/constants/Constants";

export const LandCard = ({ id, title, description, location }) => {
    const handleClick = (id) => {
        const selectedService = data.find((place) => place.id === id);
        navigate(`${PATH.places}/${id}`, {
            state: { service: selectedService },
        });
    };
    return (
        <div className={styles.card} key={id}>
            <div className={styles.imageWrapper}>
                <div>
                    <img src={mountains} alt={`${title} image`} className={styles.images} />
                </div>
                <Typography variant="h6" className={styles.numberImage}>
                    {id < 10 ? `0${id}` : id}
                </Typography>
            </div>
            <div className={styles.info}>
                <Typography variant="h6" className={styles.text}>
                    {title}
                </Typography>
                <Typography variant="p" className={styles.text}>
                    {description}
                </Typography>
                <Typography variant="p" className={styles.text}>
                    {location}
                </Typography>
                <button onClick={handleClick} className={styles.button}>
                    <Typography variant="p">Посетить</Typography>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
