import React from "react";
import styles from "./button.module.scss";
import { Typography } from "@ui/typography/Typography";

export const Button = ({
    text,
    icon,
    variant,
    disabled = false,
    onClick,
    children,
    width,
    height,
    padding,
    className,
}) => {
    const buttonClasses = `${styles.button} ${styles[variant] || ""} ${
        disabled ? styles.disabled : ""
    } ${className || ""}`.trim();

    return (
        <button
            className={buttonClasses}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            style={{ width, height, padding }}
        >
            <div className={styles.buttonContent}>
                <Typography variant="p" weight="small" className={styles.buttonText}>
                    {text}
                </Typography>
                {icon && variant === "icon" && (
                    <div className={styles.iconContainer}>
                        <img src={icon} alt="Button Icon" className={styles.arrowRight} />
                    </div>
                )}
            </div>
            {children}
        </button>
    );
};
