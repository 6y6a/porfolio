import { FC } from "react";
import { ProjectCardProps } from "./project-card.types";
import styles from "./project-card.module.css";

export const ProjectCard: FC<ProjectCardProps> = ({
    link,
    company,
    title,
    description,
}) => {
    return (
        <article className={styles.block}>
            {link && (
                <a href={link} target={"_blank"} className={styles.link} />
            )}
            {company}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </article>
    );
};
