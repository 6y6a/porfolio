import { NextPage } from "next";
import { Hero } from "../../features/hero";
import styles from "./home.module.css";

export const Home: NextPage = () => {
    return (
        <div className={styles.home}>
            <Hero />

            <div className={styles.dumb}></div>
        </div>
    );
};
