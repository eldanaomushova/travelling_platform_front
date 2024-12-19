import { Typography } from "@ui/typography/Typography";
import styles from "./mainBlock.module.scss";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/constants/Constants";
import { ChatButton } from "@assets/icons/desktop/ChatButtton";

export const MainBlock = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.mainBlockWrapper}>
                <Typography variant="h1" className={styles.title}>
                    ПУТЕШЕСТВУЙ
                </Typography>
                <div className={styles.text2Wrapper}>
                    <div className={styles.text}>
                        <Typography variant="p" weight="small" className={styles.quota}>
                            Ведь с нами будет интереснее веселее и быстрее
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
                        onClick={() => navigate(PATH.bookings)}
                        width="340px"
                        height="60px"
                        padding="0 20px"
                        className={styles.buttonPrimary}
                        variantText="h5"
                    >
                        <ArrowIcon color="var(--black)" width="27px" />
                    </Button>
                    <ChatButton className={styles.chatButton} />
                </div>
            </div>
        </div>
    );
};
