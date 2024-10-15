import React from "react";
import styles from "./Typography.module.scss";

const truncateString = (str, length) => {
    if (str.length > length) {
        return str.slice(0, length) + "...";
    }
    return str;
};

export const Typography = ({
    variant = "p",
    weight = "",
    children,
    className,
    truncate = 0,
    id,
    href,
    ...props
}) => {
    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        p: "p",
    };

    const classNameGenerated = [styles[variant], styles[weight], className]
        .filter(Boolean)
        .join(" ")
        .trim();

    const TagName = Tags[variant];
    return (
        <TagName id={id} className={classNameGenerated} href={href} {...props}>
            {!truncate ? children : truncateString(children, truncate)}
        </TagName>
    );
};
