import { Container } from "@ui/container/Container";
import styles from "./event.module.scss";
import { Typography } from "@ui/typography/Typography";
import { Line2 } from "@assets/icons/desktop/Line2";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { Card } from "@ui/cards/smallCard/Card";
import { BigCard } from "@ui/cards/bigCard/BigCard";
export const Events = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(PATH.places);
    };

    return (
        <Container>
            <Typography variant="h1" weight="small" className={styles.title}>
                {"Ближайшие".toUpperCase()}
            </Typography>
            <Typography variant="h1" weight="small" className={styles.title2}>
                {"события".toUpperCase()}
            </Typography>
            <div className={styles.lineWrapper}>
                <Line2 />
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.firstRow}>
                    <Card onClick={handleClick} />
                    <Card onClick={handleClick} />
                </div>
                {Array.from({ length: 3 }, (_, index) => (
                    <Card key={index + 2} onClick={handleClick} />
                ))}
            </div>
            <div className={styles.cardContainer}>
                {Array.from({ length: 3 }, (_, index) => (
                    <BigCard onClick={handleClick} key={index + 2} />
                ))}
            </div>
        </Container>
    );
};
