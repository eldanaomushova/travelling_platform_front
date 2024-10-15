import React from "react";
import styles from "./input.module.scss";
import { Typography } from "../typography/Typography";
import { usePhoneInput } from "./UsePhoneInput";

export const Input = ({
    type = "text",
    value: initialValue,
    name,
    placeholder = "Введите номер телефона",
    error = false,
    onChange,
    className,
}) => {
    const { value, validationError, isFocused, handleChange, handleFocus, handleBlur } =
        usePhoneInput(initialValue, onChange);

    const inputClasses = `${styles.input} ${className} ${validationError || error ? styles.inputError : ""}`;
    const isPlaceholderVisible = !value && !isFocused;

    return (
        <div className={styles.inputWrapper}>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={inputClasses}
            />
            {isPlaceholderVisible && (
                <Typography variant="h6" className={styles.placeholder}>
                    {placeholder}
                </Typography>
            )}
        </div>
    );
};
