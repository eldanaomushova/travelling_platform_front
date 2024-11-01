import { BackArrowIcon } from "@assets/icons/desktop/BackArrowIcon";
import { auth, provider } from "@utils/config/Config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.webp";
import styles from "../signup/component/signup.module.scss";
import { PATH } from "@utils/constants/Constants";
import signupPhoto from "../../../assets/images/signupImg.jpeg";
import { Typography } from "@ui/typography/Typography";
import { Input } from "@ui/input/Input";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { GoogleIcon } from "@assets/icons/desktop/GoogleIcon";

export const Login = () => {
    const [setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordPatternErr, setPasswordPatternErr] = useState(false);

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const currentUser = result.user;
            setUser(currentUser);
            localStorage.setItem("email", currentUser.email);
            navigate(PATH.home);
        });
    };

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            navigate(PATH.home);
        }
    }, [navigate]);

    const handleSignup = () => {
        setEmailError(false);
        setPasswordError(false);
        setPasswordPatternErr(false);
        if (!email) {
            setEmailError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        const isPasswordValid = passwordPattern.test(password);
        if (!isPasswordValid) {
            setPasswordPatternErr(true);
        }
        if (!email || !password || !isPasswordValid) {
            return;
        }
        console.log("Logging in with:", email, password);
    };

    const handleBack = () => {
        navigate(PATH.home);
    };
    const handleSignupPage = () => {
        navigate(PATH.signup);
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
                        errorMsg={emailError ? "Email не может быть пустым" : ""}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordPatternErr(false);
                        }}
                        error={passwordError || passwordPatternErr}
                        errorMsg={
                            passwordPatternErr
                                ? "Пароль: минимум 8 символов, включая загл. и стр. буквы, цифры."
                                : passwordError
                                  ? "Пароль не может быть пустым"
                                  : ""
                        }
                    />
                    <Button
                        variant="secondary"
                        text="Войти"
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
                        text="Нет аккаунта? Регистрация"
                        className={styles.alreadyBtn}
                        onClick={handleSignupPage}
                    />
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src={signupPhoto} alt="Горы" className={styles.img} />
            </div>
        </div>
    );
};
