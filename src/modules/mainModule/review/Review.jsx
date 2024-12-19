import { useState } from "react";
import { Typography } from "@ui/typography/Typography";
import styles from "./review.module.scss";
import { ReviewCardType } from "@utils/constants/Constants";
import { HotelIcon } from "@assets/icons/desktop/HotelIcon";
import { Input } from "@ui/input/Input";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";

export const Review = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(index);
    };
    const handleFind = () => {};

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.reviewTextWrapper}>
                <Typography variant="h1" weight="small" className={styles.reviewHeader}>
                    МЫ ЖДЕМ ВАШИХ ОТЗЫВОВ
                </Typography>
                <Typography variant="h6" className={styles.reviewText}>
                    Понравился тур? Скорее напиши об этом, чтобы другие люди увидели эту красоту
                </Typography>
            </div>
            <div className={styles.reviewFindTicketWrapper}>
                <div className={styles.cards}>
                    {ReviewCardType.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${clickedIndex === index ? styles.clickedCard : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            <HotelIcon
                                className={styles.hotelIcon}
                                color={clickedIndex === index ? "var(--white)" : "var(--black)"}
                            />
                            <Typography variant="h6">{item}</Typography>
                        </div>
                    ))}
                </div>
                <div className={styles.fieldsWraper}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Откуда"
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input1}
                    />
                    <Input
                        type="text"
                        name="username"
                        placeholder="Куда"
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input2}
                    />
                    <Input
                        type="date"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input3}
                    />
                    <Input
                        type="text"
                        name="username"
                        placeholder="Количество пассажиров"
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputQuantity}
                    />
                    <Button
                        className={styles.buttonFind}
                        width="100%"
                        height="60px"
                        onClick={handleFind}
                        text="Найти билеты"
                        variant="secondary"
                        variantText="h5"
                    >
                        <ArrowIcon width="28px" height="28px" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
