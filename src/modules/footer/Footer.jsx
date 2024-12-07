import styles from "./footer.module.scss";
import logo from "../../assets/logo/logo.webp";
import { Typography } from "@ui/typography/Typography";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoContainer} onClick={() => navigate(PATH.home)}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="logo img" className={styles.logo} />
                </div>
                <Typography variant="p" weight="small" className={styles.username}>
                    Kyrgyz Wonders
                </Typography>
            </div>
            <div className={styles.footerBottom}>
                <Typography variant="p" weight="small" className={styles.copyright}>
                    © 2024 Kyrgyz Wonders. All rights reserved.
                </Typography>
            </div>
        </div>
    );
};
