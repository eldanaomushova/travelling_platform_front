import { Typography } from "@ui/typography/Typography";
import styles from "./aboutUs.module.scss";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { ReviewCard } from "@ui/cards/reviewCard/ReviewCard";
import img from "@assets/images/signupPhoto.webp";
const imageGallery = [
    {
        id: 1,
        src: "https://ak-sai.com/wp-content/uploads/Lenin-Peak1-2-400x400.jpg",
        alt: "Яркий момент 1",
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_PJ0ExkR_saBBy7hhBPQ7OnmmVim33HWKw&s",
        alt: "Яркий момент 2",
    },
    {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AnHgoV5kmADm3DgOE5heybxwajMH0eu_GQ&s",
        alt: "Яркий момент 3",
    },
    {
        id: 4,
        src: "https://ak-sai.com/wp-content/uploads/Lenin-Peak1-2-400x400.jpg",
        alt: "Яркий момент 1",
    },
    {
        id: 5,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_PJ0ExkR_saBBy7hhBPQ7OnmmVim33HWKw&s",
        alt: "Яркий момент 2",
    },
    {
        id: 6,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AnHgoV5kmADm3DgOE5heybxwajMH0eu_GQ&s",
        alt: "Яркий момент 3",
    },
];

const reviewObject = [
    {
        review: 5,
        title: "Excellent Service",
        name: "John Doe",
    },
    {
        review: 4,
        title: "Very Good Experience",
        name: "Jane Smith",
    },
    {
        review: 3,
        title: "Good, but can improve",
        name: "Mike Johnson",
    },
    {
        review: 5,
        title: "Highly Recommend!",
        name: "Emily Davis",
    },
    {
        review: 4,
        title: "Worth the Visit",
        name: "Chris Brown",
    },
];
const questions = [
    {
        title: "Как скачать приложение?",
    },
    {
        title: "Как зарегистрироваться?",
    },
    {
        title: "Какие есть способы оплаты?",
    },
    {
        title: "Как изменить аккаунт?",
    },
];

export const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.moments}>
                <Typography variant="h1" weight="small">
                    САМЫЕ ЯРКИЕ МОМЕНТЫ
                </Typography>
                <Typography variant="h6" className={styles.aboutSmallText}>
                    Ниже собраны ответы на самые частые вопросы от наших пользователей
                </Typography>
                <Button
                    text="Подписаться"
                    variant="secondary"
                    variantText="h4"
                    width="100%"
                    height="80px"
                    className={styles.buttonFollowUs}
                >
                    <ArrowIcon width="40px" />
                </Button>
                <div className={styles.imageGallery}>
                    {imageGallery.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className={styles.galleryImage}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.reviews}>
                <Typography variant="h1" weight="small" className={styles.reviewTitle}>
                    ОТЗЫВЫ НАШИХ КЛИЕНТОВ
                </Typography>
                <div className={styles.reviewCards}>
                    {reviewObject.map((reviewData) => (
                        <ReviewCard
                            key={reviewData.title}
                            review={reviewData.review}
                            title={reviewData.title}
                            name={reviewData.name}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.questions}>
                <div className={styles.questionsWrapper}>
                    <Typography variant="h1" weight="small" className={styles.title}>
                        САМЫЕ ЧАСТЫЕ ВОПРОСЫ
                    </Typography>
                    <Typography variant="h6" className={styles.questionsText}>
                        Ниже собраны ответы на самые частые вопросы от наших пользователей
                    </Typography>
                    {questions.map((question, index) => (
                        <div key={index} className={styles.questionItem}>
                            <Button
                                variant="text"
                                text={question.title}
                                variantText="h4"
                                className={styles.questionsButton}
                            >
                                <ArrowIcon width="30px" className={styles.arrowIcon} />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className={styles.imageWrapper}>
                    <img src={img} alt="Mountain" className={styles.image} />
                </div>
            </div>
        </div>
    );
};
