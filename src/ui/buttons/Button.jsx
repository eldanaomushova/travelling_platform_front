import React from "react";
import classNames from "classnames";
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
    return (
        <button
            className={classNames(styles.button, styles[variant], className, {
                [styles.disabled]: disabled,
            })}
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
