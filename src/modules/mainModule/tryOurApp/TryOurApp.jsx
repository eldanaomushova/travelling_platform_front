import React from "react";
import styles from "./tryOurApp.module.scss";
import { PATH } from "@utils/constants/Constants";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { Container } from "@ui/container/Container";
import { Typography } from "@ui/typography/Typography";

export const TryOurApp = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(PATH.places);
    };
    //temp data
    const logout = () => {
        localStorage.clear();
        navigate(PATH.signup);
    };
    return (
        <Container>
            <Typography variant="h1" className={styles.headerText}>
                Хочешь узнать больше интересных мест?
            </Typography>
            <Typography variant="h1" className={styles.headerText2}>
                Попробуй наше приложение
            </Typography>
            <button onClick={handleClick} className={styles.button}>
                <Typography variant="p">Посетить</Typography>
                <ArrowIcon />
            </button>
            <button onClick={logout}>Logout</button>
        </Container>
    );
};
