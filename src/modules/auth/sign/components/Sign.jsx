import { BackArrowIcon } from "@assets/icons/desktop/BackArrowIcon";
import { auth, provider } from "@utils/config/Config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
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

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordPatternErr, setPasswordPatternErr] = useState(false);
    const { register } = useSignupStore();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const currentUser = result.user;
            localStorage.setItem("email", currentUser.email);
            navigate(PATH.home);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

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

        try {
            const username = email.split("@")[0];
            const currentUser = await register(email, password, username, navigate);

            if (currentUser?.email && currentUser?.password) {
                localStorage.setItem("email", currentUser.email);
                window.alert("Registered sucessfully, please log in now");
                navigate(PATH.login);
            }
        } catch (error) {
            navigate(PATH.login);
        }
    };

    const handleBack = () => {
        navigate(PATH.home);
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
                    <Typography variant="h2">Welcome to Kyrgyz Wonders</Typography>
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
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError || !passwordsMatch || passwordPatternErr}
                        errorMsg={
                            passwordPatternErr
                                ? "Пароль: минимум 8 символов, включая заглавные и строчные буквы, а также цифры."
                                : passwordError
                                  ? "Пожалуйста, введите пароль."
                                  : !passwordsMatch
                                    ? "Пароли не совпадают."
                                    : ""
                        }
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        className={styles.input}
                        placeholder="Подтвердите пароль"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!passwordsMatch}
                        errorMsg={!passwordsMatch ? "Пароли не совпадают" : ""}
                    />
                    <Button
                        variant="secondary"
                        variantText="h6"
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
                            Or
                        </Typography>
                        <div className={styles.line} />
                    </div>
                    <Button onClick={signInWithGoogle} variant="google" width="600px" height="60px">
                        <GoogleIcon /> Войти c Google
                    </Button>
                    <Button
                        variant="text"
                        variantText="h6"
                        text="Есть аккаунт? Войти"
                        className={styles.alreadyBtn}
                        onClick={() => navigate(PATH.login)}
                    />
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src={signupPhoto} alt="Горы" className={styles.img} />
            </div>
        </div>
    );
};
