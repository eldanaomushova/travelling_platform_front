import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./button.module.scss";
import { Typography } from "../../ui/typography/Typography";

export const Button = ({ text, icon, variant, disabled, onClick, children }) => {
    return (
        <button
            className={classNames(styles.button, styles[variant], {
                [styles.disabled]: disabled,
            })}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {variant === "icon" ? (
                <img src={icon} alt="Button Icon" className={styles.arrowRight} />
            ) : (
                <Typography variant="h5" weight="semi-bold" className={styles.buttonText}>
                    {text}
                </Typography>
            )}
            {children}
        </button>
    );
};
