import styles from "./footer.module.scss";
import logo from "../../assets/logo/logo.webp";
import { Typography } from "@ui/typography/Typography";
import { useNavigate } from "react-router-dom";
import { Container } from "@ui/container/Container";
import { Line2 } from "@assets/icons/desktop/Line2";
import { Button } from "@ui/buttons/Button";
import { TelegramBlack } from "@assets/icons/desktop/TelegramBlack";
import { InstagrammBlack } from "@assets/icons/desktop/InstagramBlack";
export const Footer = () => {
    const navigate = useNavigate();
    const handleLang = () => {};
    return (
        <Container>
            <Typography variant="h1" className={styles.letsTripText}>
                ДАВАЙ ПУТЕШЕСТВОВАТЬ
            </Typography>
            <Typography variant="h1" className={styles.togetherText}>
                ВМЕСТЕ
            </Typography>
            <Line2 />
            <div className={styles.buttonsLang}>
                <Button variant="language" text="EN" width="33.01%" onClick={handleLang} />
                <Button variant="language" text="RU" width="33.02%" onClick={handleLang} />
                <Button variant="language" text="KG" width="33%" onClick={handleLang} />
            </div>
            <div className={styles.footerInfoWrapper}>
                <div className={styles.logoContainer} onClick={() => navigate(PATH.home)}>
                    <div className={styles.logoWrapper}>
                        <img src={logo} alt="logo img" className={styles.logo} />
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <Typography variant="p" weight="extraSmall">
                        Навигация
                    </Typography>
                    <Typography variant="p">Навигация</Typography>
                    <Typography variant="p">Контакты</Typography>
                    <Typography variant="p">Новости</Typography>
                    <Typography variant="p">О Компании</Typography>
                </div>
                <div className={styles.footerMail}>
                    <Typography variant="p" weight="extraSmall">
                        Почта
                    </Typography>
                    <Typography variant="p">text@example.com</Typography>
                </div>
                <div className={styles.footerSocials}>
                    <Typography variant="p" weight="extraSmall">
                        Социальные сети
                    </Typography>
                    <Typography variant="p" className={styles.soclink}>
                        <TelegramBlack /> Telegram
                    </Typography>
                    <Typography variant="p" className={styles.soclink}>
                        <InstagrammBlack /> Instagram
                    </Typography>
                </div>
            </div>
        </Container>
    );
};
