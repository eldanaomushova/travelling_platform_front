import { Typography } from "@ui/typography/Typography";
import styles from "./myTourComponent.module.scss";
import { Button } from "@ui/buttons/Button";
import logo from "@assets/logo/logo.webp";
import { BackArrowIcon } from "@assets/icons/desktop/BackArrowIcon";
import { UserIcon } from "@assets/icons/desktop/UserIcon";
import { MyTourIcon } from "@assets/icons/desktop/MyTourIcon";

export const MyTourComponent = () => {
    return (
        <div className={styles.myTourContainer}>
            <div className={styles.myTourMenuWrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logoText}>
                        <img src={logo} alt="logo" className={styles.logo} />
                        <Typography variant="h6">Alaia Tours</Typography>
                    </div>
                    <BackArrowIcon />
                </div>
                <div className={styles.myTourButtons}>
                    <Button
                        variant="primary"
                        variantText="h6"
                        width="270px"
                        height="50px"
                        className={styles.buttonCurrentPage}
                    >
                        <UserIcon color="var(--black)" />
                        Профиль
                    </Button>
                    <Button
                        variant="primary"
                        variantText="h6"
                        width="270px"
                        height="50px"
                        className={styles.buttonCurrentPage}
                    >
                        <MyTourIcon color="var(--black)" />
                        Мои туры
                    </Button>
                </div>
            </div>
            <div className={styles.toursWrapper}>
                <Typography variant="h4">Ваши туры:</Typography>
                <Typography variant="h6" className={styles.choosePer}>
                    Выберите период:
                </Typography>
                <div className={styles.periodButtons}>
                    <Button
                        variant="primary"
                        variantText="h6"
                        text="2024"
                        width="110px"
                        height="44px"
                        className={styles.buttonPeriod}
                    />
                    <Button
                        variant="primary"
                        variantText="h6"
                        text="2025"
                        width="110px"
                        height="44px"
                        className={styles.buttonPeriod}
                    />
                </div>
                <Typography variant="h6" className={styles.periodTextHeader}>
                    Активные туры:
                </Typography>
                <Typography variant="h6" className={styles.periodTextHeader}>
                    Прошедшие туры:
                </Typography>
            </div>
        </div>
    );
};
