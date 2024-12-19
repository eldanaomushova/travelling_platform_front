import { Typography } from "@ui/typography/Typography";
import styles from "./tryourApp.module.scss";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";

export const TryOurApp = () => {
    return (
        <div className={styles.tryOurAppContainer}>
            <Typography variant="h1" weight="small" className={styles.propose}>
                ХОЧЕШЬ УЗНАТЬ БОЛЬШЕ ИНТЕРЕСНЫХ МЕСТ?
            </Typography>
            <Typography variant="h1" weight="small" className={styles.tryOurApp}>
                ПОПРОБУЙ НАШЕ ПРЕДЛОЖЕНИЕ
            </Typography>
            <Button
                text="Попробовать"
                variant="secondary"
                variantText="h4"
                width="100%"
                padding="12px 22px 12px 350px"
            >
                <ArrowIcon width="40px" />
            </Button>
        </div>
    );
};
