import Image from "next/image";
import { AvatarProps } from "./avatar.types";
import { FC } from "react";
import styles from "./avatar.module.css";

export const Avatar: FC<AvatarProps> = ({ alt, ...rest }) => {
    return (
        <div className={styles.avatar}>
            <Image {...rest} alt={alt} />
        </div>
    );
};
