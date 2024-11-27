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
        if(currentUser){
            navigate(path);
        }else{
            window.alert("Please Log in First")
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
                        location.pathname === PATH.home ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Main"
                    onClick={() => handleNavigation(PATH.home)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                />
                <Button
                    className={
                        location.pathname === PATH.landmarks ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Landmarks"
                    onClick={() => handleNavigation(PATH.landmarks)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                />
                <Button
                    className={
                        location.pathname === PATH.tours ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="Tours"
                    onClick={() => handleNavigation(PATH.tours)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                />
                <Button
                    className={
                        location.pathname === PATH.bookings ? styles.activeButton : styles.button
                    }
                    variant="primary"
                    text="My&nbsp;Journey"
                    onClick={() => handleMyTour(PATH.bookings)}
                    width="180px"
                    height="60px"
                    padding="0 40px"
                />
            </div>
            {localStorage.getItem("email") ? (
                <Button
                    variant="secondary"
                    text="Log Out"
                    onClick={() => {
                        localStorage.removeItem("email");
                        window.alert("You have been logged out.");
                        handleNavigation(PATH.home);
                    }}
                    width="160px"
                    height="60px"
                    padding="0 40px"
                    className={styles.buttonLogout}
                />
            ) : (
                <Button
                    variant="secondary"
                    text="Log In/Sign Up"
                    onClick={() => handleNavigation(PATH.signup)}
                    width="240px"
                    height="60px"
                    padding="0 40px"
                    className={styles.buttonAuth}
                >
                    <ArrowIcon color="var(--black)" width="20px" />
                </Button>
            )}
        </div>
    );
};
