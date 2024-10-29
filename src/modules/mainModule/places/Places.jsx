import styles from "./places.module.scss";
import mountains from "../../../assets/images/mountains.webp";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { Typography } from "@ui/typography/Typography";
import { Container } from "@ui/container/Container";
import { PATH } from "@utils/constants/Constants";

const data = [
    {
        id: 1,
        title: "Долина Арашан",
    },
    {
        id: 2,
        title: "Чункурчак",
    },
    {
        id: 3,
        title: "Сон-Кол",
    },
];

export const Places = () => {
    const navigate = useNavigate();
    const selectedService = {};
    const handleClick = () => {
        navigate(`${PATH.places}`, {
            state: { service: selectedService },
        });
    };

    return (
        <Container>
            <Typography variant="h1" className={styles.title}>
                {"А вы тут были?".toUpperCase()}
            </Typography>
            <div className={styles.cardsWrapper}>
                {data.map(({ id, title }) => (
                    <div className={`${styles.card} ${styles[`card${id}`]}`} key={id}>
                        <div className={styles.imageWrapper}>
                            <img src={mountains} alt={`${title} image`} className={styles.images} />
                            <Typography variant="p" className={styles.numberImage}>
                                {id < 10 ? `0${id}` : id}
                            </Typography>
                        </div>
                        <div className={styles.info}>
                            {id === 2 && (
                                <Typography variant="p" className={styles.cardNumber}>
                                    {id < 10 ? `0${id}` : id}
                                </Typography>
                            )}
                            <Typography variant="p" className={styles.text}>
                                {title}
                            </Typography>
                            <button onClick={handleClick} className={styles.button}>
                                <Typography variant="p">Посетить</Typography>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};
