import { BackArrowIcon } from "@assets/icons/desktop/BackArrowIcon";
import { auth, provider } from "@utils/config/Config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo/logo.webp";
import styles from "./signup.module.scss";
import { PATH } from "@utils/constants/Constants";
import signupPhoto from "../../../../assets/images/signupImg.jpeg";
import { Typography } from "@ui/typography/Typography";
import { Input } from "@ui/input/Input";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { GoogleIcon } from "@assets/icons/desktop/GoogleIcon";
import { useSignupStore } from "../store/useSignupStore";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordPatternErr, setPasswordPatternErr] = useState(false);
    const { data, register } = useSignupStore();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const currentUser = result.user;
            localStorage.setItem("email", currentUser.email);
            navigate(PATH.home);
        });
    };

    useEffect(() => {
        const emailFromStorage = localStorage.getItem("email");
        if (emailFromStorage) {
            navigate(PATH.home);
        }
    }, [navigate]);

    const handleSignup = async () => {
        setEmailError(false);
        setPasswordError(false);
        setPasswordsMatch(true);
        setPasswordPatternErr(false);

        if (!email) {
            setEmailError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
        }
        const isPasswordValid = passwordPattern.test(password);
        if (!isPasswordValid) {
            setPasswordPatternErr(true);
        }
        if (!email || !password || password !== confirmPassword || !isPasswordValid) {
            return;
        }

        register(email, password);
        if (data) {
            navigate(PATH.home);
        }
        console.log(email, password);
    };
    const handleBack = () => {
        navigate(PATH.home);
    };
    const handleLoginPage = () => {
        navigate(PATH.login);
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupWrapper}>
                <div className={styles.logoContainer}>
                    <BackArrowIcon onClick={handleBack} />
                    <div className={styles.logoWrapper}>
                        <img src={logo} alt="logo img" className={styles.logo} />
                    </div>
                    <Typography variant="p" weight="small" className={styles.username}>
                        Kyrgyz Wonders
                    </Typography>
                </div>
                <div className={styles.welcomeText}>
                    <Typography variant="h2">Добро пожаловать!</Typography>
                </div>
                <div className={styles.inputContainer}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Введите email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        error={emailError}
                        errorMsg={emailError ? "Введите ваш email" : ""}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError || !passwordsMatch || passwordPatternErr}
                        errorMsg={
                            passwordPatternErr
                                ? "Пароль: минимум 8 символов, включая загл. и стр. буквы, цифры."
                                : passwordError
                                  ? "Введите ваш пароль"
                                  : !passwordsMatch
                                    ? "Пароли не совпадают"
                                    : ""
                        }
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Подтвердите пароль"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!passwordsMatch}
                        errorMsg={!passwordsMatch ? "Пароли не совпадают" : ""}
                    />
                    <Button
                        variant="secondary"
                        text="Регистрация"
                        onClick={handleSignup}
                        width="600px"
                        height="60px"
                        padding="0 40px"
                    >
                        <ArrowIcon color="var(--black)" />
                    </Button>
                    <div className={styles.separatorContainer}>
                        <div className={styles.line} />
                        <Typography variant="p" weight="small" className={styles.orText}>
                            Или
                        </Typography>
                        <div className={styles.line} />
                    </div>
                    <Button onClick={signInWithGoogle} variant="google" width="600px" height="60px">
                        <GoogleIcon /> Войти с Google
                    </Button>
                    <Button
                        variant="text"
                        text="Есть аккаунт? Войти"
                        className={styles.alreadyBtn}
                        onClick={handleLoginPage}
                    />
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src={signupPhoto} alt="Горы" className={styles.img} />
            </div>
        </div>
    );
};
