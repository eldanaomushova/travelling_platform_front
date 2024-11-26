import { Typography } from "@ui/typography/Typography";
import styles from "./mainBlock.module.scss";
import { Container } from "@ui/container/Container";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";

export const MainBlock = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className={styles.mainBlockWrapper}>
                <Typography variant="h1" className={styles.title}>
                    ПУТЕШЕСТВУЙ
                </Typography>
                <div className={styles.text2Wrapper}>
                    <div className={styles.text}>
                        <Typography variant="p" weight="small" className={styles.quota}>
                            Ведь с нами будет интереснее, веселее и быстрее
                        </Typography>
                    </div>
                    <Typography variant="h1" className={styles.title}>
                        С НАМИ
                    </Typography>
                </div>
                <div className={styles.image}>
                    <Button
                        variant="secondary"
                        text="Начать путь"
                        onClick={() => navigate(PATH.landmarks)}
                        width="260px"
                        height="60px"
                        padding="0 40px"
                        className={styles.buttonPrimary}
                    >
                        <ArrowIcon color="var(--black)" width="20px" />
                    </Button>
                </div>
            </div>
        </Container>
    );
};