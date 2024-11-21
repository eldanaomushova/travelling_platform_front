import styles from "./header.module.scss";
import logo from "../../assets/logo/logo.webp";
import { Typography } from "@ui/typography/Typography";
import { Button } from "@ui/buttons/Button";
import { PATH } from "@utils/constants/Constants";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="logo img" className={styles.logo} />
                </div>
                <Typography variant="p" weight="small" className={styles.username}>
                    Kyrgyz Wonders
                </Typography>
            </div>
            <div className={styles.buttonsWrapper}>
                <Button
                    className={
                        location.pathname === PATH.news ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Локации"
                    onClick={() => handleNavigation(PATH.landmarks)}
                    width="200px"
                    height="60px"
                    padding="0 40px"
                />
                <Button
                    className={
                        location.pathname === PATH.home ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Главная"
                    onClick={() => handleNavigation(PATH.home)}
                    width="200px"
                    height="60px"
                    padding="0 40px"
                />
                <Button
                    className={
                        location.pathname === PATH.tours ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Туры"
                    onClick={() => handleNavigation(PATH.tours)}
                    width="200px"
                    height="60px"
                    padding="0 40px"
                />
            </div>
            <Button
                variant="secondary"
                text="Вход/Регистрация"
                onClick={() => handleNavigation(PATH.signup)}
                width="300px"
                height="60px"
                padding="0 40px"
                className={styles.buttonPrimary}
            >
                <ArrowIcon color="var(--black)" width="20px" />
            </Button>
        </div>
    );
};
