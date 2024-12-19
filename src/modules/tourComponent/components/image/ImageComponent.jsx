import { Typography } from "@ui/typography/Typography";
import styles from "./image.module.scss";
import { Container } from "@ui/container/Container";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";

export const ImageComponent = () => {
    return (
        <div>
            <Typography variant="h1" className={styles.title}>
                ВЫБИРАЙ ТУР
            </Typography>
            <div className={styles.text2Wrapper}>
                <div className={styles.text}>
                    <Typography variant="p" weight="small" className={styles.quota}>
                        Туры в горы на&nbsp;озера,&nbsp;в долины или&nbsp;в&nbsp;живописный&nbsp;лес
                    </Typography>
                </div>
                <Typography variant="h1" className={styles.title}>
                    ДЛЯ СЕБЯ
                </Typography>
            </div>
            <div className={styles.image}>
                <Typography variant="p" className={styles.photoByText}>
                    Фото: Геннадий&nbsp;Закиров
                </Typography>
                <Typography variant="h1" className={styles.tourNametext}>
                    ТУР В ДОЛИНУ АРАШАН
                </Typography>
                <Button
                    variant="secondary"
                    text="Посетить"
                    onClick={() => navigate(PATH.bookings)}
                    width="340px"
                    height="60px"
                    padding="0 20px"
                    className={styles.buttonPrimary}
                    variantText="h5"
                >
                    <ArrowIcon color="var(--black)" width="27px" />
                </Button>
            </div>
        </div>
    );
};
