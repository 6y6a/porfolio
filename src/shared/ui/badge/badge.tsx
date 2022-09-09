import { FC } from "react";
import { BadgeProps } from "./badge.types";
import styles from "./badge.module.css";
import cn from "classnames";

export const Badge: FC<BadgeProps> = ({
    variant = "default",
    className,
    children,
}) => {
    return (
        <span className={cn(styles.block, styles[variant], className)}>
            {children}
        </span>
    );
};
