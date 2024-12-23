import { BackArrowIcon } from "@assets/icons/desktop/BackArrowIcon";
import { auth, provider } from "@utils/config/Config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@assets/logo/logo.webp";
import styles from "../../signup/component/signup.module.scss";
import { PATH } from "@utils/constants/Constants";
import signupPhoto from "@assets/images/signupImg.jpeg";
import { Typography } from "@ui/typography/Typography";
import { Input } from "@ui/input/Input";
import { Button } from "@ui/buttons/Button";
import { ArrowIcon } from "@assets/icons/desktop/ArrowIcon";
import { GoogleIcon } from "@assets/icons/desktop/GoogleIcon";
import { useLoginStore } from "../store/useLoginStore";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordPatternErr, setPasswordPatternErr] = useState(false);
    const [loginError, setLoginError] = useState("");
    const { login, initializeToken } = useLoginStore();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const currentUser = result.user;
            localStorage.setItem("email", currentUser.email);
            navigate(PATH.home);
        });
    };

    useEffect(() => {
        initializeToken();
    }, [initializeToken]);

    const handleLogin = async () => {
        setEmailError(false);
        setPasswordError(false);
        setPasswordPatternErr(false);
        setLoginError("");

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

        try {
            const currentUser = await login(email, password);
            console.log(currentUser);
            if (currentUser) {
                localStorage.setItem("email", currentUser.email);
                navigate(PATH.home);
            }
            localStorage.setItem("email", currentUser.email);
        } catch (error) {
            setLoginError(error.message || "Login failed");
        }
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
                    <Typography variant="h2">Welcome to Kyrgyz Wonders</Typography>
                </div>
                <div className={styles.inputContainer}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Введите email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(false);
                            setLoginError("");
                        }}
                        className={styles.input}
                        error={emailError || loginError}
                        errorMsg={
                            loginError
                                ? "Неправильный email или пароль"
                                : emailError
                                  ? "Email не должен быть пустым"
                                  : ""
                        }
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordPatternErr(false);
                            setLoginError("");
                        }}
                        className={styles.input}
                        error={passwordError || passwordPatternErr || loginError}
                        errorMsg={
                            loginError
                                ? "Неправильный email или пароль."
                                : passwordPatternErr
                                  ? "Пароль: минимум 8 символов, включая заглавные и строчные буквы, а также цифры."
                                  : passwordError
                                    ? "Пароль не может быть пустым."
                                    : ""
                        }
                    />

                    <Button
                        variant="secondary"
                        variantText="h6"
                        text="Войти"
                        onClick={handleLogin}
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
