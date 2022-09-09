import { NextPage } from "next";
import { Hero } from "../../features/hero";
import styles from "./home.module.css";
import { WorkExperience } from "../../features/content";

export const Home: NextPage = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <WorkExperience />
        </div>
    );
};
