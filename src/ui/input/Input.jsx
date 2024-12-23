import { Typography } from "@ui/typography/Typography";
import React, { useState } from "react";
import styles from "./input.module.scss";

export const Input = ({
    type = "text",
    name,
    placeholder,
    error = false,
    onChange,
    className,
    value = "",
    errorMsg,
    children,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!inputValue) {
            setIsFocused(false);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    const isPlaceholderVisible = !inputValue && !isFocused;
    const inputClasses = `${styles.input} ${className} ${error ? styles.error : ""}`;
    const containerClasses = `${styles.inputContainer} ${children ? styles.hasIcon : ""}`;

    return (
        <div className={containerClasses}>
            {children && <div className={styles.icon}>{children}</div>}
            <input
                type={type}
                name={name}
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={inputClasses}
                placeholder=""
            />
            {isPlaceholderVisible && (
                <Typography variant="p" weight="small" className={styles.placeholder}>
                    {placeholder}
                </Typography>
            )}
            {error && errorMsg && (
                <Typography variant="p" weight="extraSmall" className={styles.errorMessage}>
                    {errorMsg}
                </Typography>
            )}
        </div>
    );
};
