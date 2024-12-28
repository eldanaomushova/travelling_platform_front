import styles from "./header.module.scss";
import logo from "@assets/logo/logo.webp";
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
    const handleMyTour = (path) => {
        const currentUser = localStorage.getItem("email");
        console.log(currentUser);
        if (currentUser) {
            navigate(path);
        } else {
            window.alert("Please Log in First");
            navigate(PATH.signup);
        }
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer} onClick={() => handleNavigation(PATH.home)}>
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
                    text="Новости"
                    onClick={() => handleNavigation(PATH.home)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                    variantText="h6"
                />
                <Button
                    className={
                        location.pathname === PATH.home ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Главная"
                    onClick={() => handleNavigation(PATH.home)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                    variantText="h6"
                />
                <Button
                    className={
                        location.pathname === PATH.tours ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Туры"
                    onClick={() => handleNavigation(PATH.tours)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                    variantText="h6"
                />
            </div>
            <Typography variant="h6" onClick={() => handleNavigation(PATH.signup)}>
                Регистрация
            </Typography>
        </div>
    );
};
