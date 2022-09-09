import { FC } from "react";
import { LayoutProps } from "./layout.types";
import styles from "./layout.module.css";
import { Background } from "../background";

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Background />
            <main className={styles.main}>
                <div className={styles.content}>{children}</div>
            </main>
        </div>
    );
};
