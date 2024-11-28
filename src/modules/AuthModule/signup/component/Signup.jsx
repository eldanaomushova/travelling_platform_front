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

export const Signup = () => {
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
            navigate(PATH.home); // Redirect to the home page
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
            const currentUser = await register(email, password, navigate);

            if (currentUser?.email && currentUser?.password) {
                localStorage.setItem("email", currentUser.email);
                navigate(PATH.home); // Redirect to the home page
            } else {
                window.alert("You are already registered, please log in now");
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
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        error={emailError}
                        errorMsg={emailError ? "Enter your email" : ""}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError || !passwordsMatch || passwordPatternErr}
                        errorMsg={
                            passwordPatternErr
                                ? "Password: at least 8 characters, including uppercase and lowercase letters, and numbers."
                                : passwordError
                                ? "Please enter your password."
                                : !passwordsMatch
                                ? "Passwords do not match."
                                : ""
                        }
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!passwordsMatch}
                        errorMsg={!passwordsMatch ? "Passwords do not match" : ""}
                    />
                    <Button
                        variant="secondary"
                        text="Sign in"
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
                        <GoogleIcon /> Sign in with Google
                    </Button>
                    <Button
                        variant="text"
                        text="Already have an account? Log in"
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

