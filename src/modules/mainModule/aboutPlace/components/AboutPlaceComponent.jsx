import { useLocation, useNavigate } from "react-router-dom";
import styles from "./aboutPlaceComponent.module.scss";
import mountains from "@assets/images/mountains.webp";
import { Typography } from "@ui/typography/Typography";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { PATH } from "@utils/constants/Constants";
import { useAboutStore } from "../store/useAboutStore";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const AboutPlaceComponent = () => {
    const { state } = useLocation();
    const { title, description } = state || {};
    const { planName, startDate, endDate, price } = state || {};
    const navigate = useNavigate();
    const { fetchData } = useAboutStore();

    const handleBooking = async () => {
        const currentUser = localStorage.getItem("email");
        console.log(currentUser);

        if (!currentUser) {
            window.alert("Please log in first before booking!");
            navigate(PATH.signup);
            return;
        } else {
            const userConfirmed = window.confirm("Are you sure?");
            if (userConfirmed) {
                try {
                    await createBooking(currentUser, title);
                    window.alert("Booked successfully. We will contact you soon!");
                    navigate(PATH.home);
                } catch (error) {
                    window.alert(`Booking failed: ${error.message}`);
                }
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={mountains} alt={`${title} image`} className={styles.image} />
            </div>
            <div className={styles.detailsWrapper}>
                <div className={styles.details}>
                    <Typography variant="h2">
                        {title}
                        {planName}
                    </Typography>
                    <Typography variant="p">{description}</Typography>
                    {startDate && (
                        <Typography variant="p">
                            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                        </Typography>
                    )}
                    <Typography variant="h6">{price} сом</Typography>
                </div>
                <Button
                    variant="secondary"
                    text="Book"
                    onClick={handleBooking}
                    width="100%"
                    height="60px"
                    padding="0 40px"
                    className={styles.buttonPrimary}
                >
                    <ArrowIcon color="var(--black)" width="20px" />
                </Button>
            </div>
        </div>
    );
};
