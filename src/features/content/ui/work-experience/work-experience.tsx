import styles from "./work-experience.module.css";
import { FC } from "react";
import { WorkExperienceProps } from "./work-experience.types";
import { WorkCard } from "../work-card";

const work = [
    {
        duration: [new Date("03-01-2022"), null],
        title: "Clay global",
        position: "Senior frontend",
        description:
            "Developing corporate portals with big focus on animations, developing MVP platform for moder MSSPs.",
        link: "https://clay.global/",
    },
    {
        duration: [new Date("12-01-2020"), new Date("03-01-2022")],
        title: "Arcadia",
        position: "Senior frontend",
        description:
            "Developing big enterprise SAAS platform to learn english. Rewriting from JQuery to a modern react stack, developing new features.",
        link: "https://arcadia.spb.ru/",
    },
    {
        duration: [new Date("02-01-2018"), new Date("12-01-2020")],
        title: "Leningrad Agency",
        position: "Middle frontend",
        description:
            "Developing startup project Scores 24. Working on a modern react stack. Developing components, pages, making code review.",
        link: "https://leningrad.io/",
    },
    {
        duration: [new Date("09-01-2016"), new Date("02-01-2018")],
        title: "Copterdron",
        position: "Junior frontend",
        description:
            "Developing and maintaining e-commerce shop of quadrocopters. Developing cart, checkout process, payment, product page.",
        link: "https://copterdrone.ru/",
    },
];

export const WorkExperience: FC<WorkExperienceProps> = () => {
    return (
        <section className={styles.block}>
            <ul className={styles.list}>
                {work.map((item) => (
                    <li>
                        <WorkCard {...item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};
