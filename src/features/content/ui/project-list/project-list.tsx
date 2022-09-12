import { FC } from "react";
import { ProjectListProps } from "./project-list.types";
import styles from "./project-list.module.css";
import { ProjectCard } from "../project-card";

const projects = [
    {
        title: "Scores 24",
        description:
            "Live sports scores application: results, predictions and schedule.",
        link: "https://scores24.live/en",
        company: "Leningrad Agency",
    },
    {
        title: "Stavka",
        description: "Social network application for sport lovers.",
        link: "https://stavka.tv/",
        company: "Leningrad Agency",
    },
    {
        title: "Echo street",
        description: "Corporate portal for investment company.",
        link: "https://www.echostreetcapital.com/",
        company: "Clay global",
    },
    {
        title: "Gofluent",
        description: "Portal for learning English.",
        company: "Arcadia",
    },
    {
        title: "Copterdron",
        description: "E-commerce shop for selling quadrocopters.",
        company: "Copterdron",
        link: "https://copterdrone.ru/",
    },
];

export const ProjectList: FC<ProjectListProps> = () => {
    return (
        <section>
            <ul className={styles.list}>
                {projects.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <ProjectCard
                            company={item.company}
                            description={item.description}
                            title={item.title}
                            link={item.link}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
