import styles from "./work-card.module.css";
import { FC } from "react";
import { WorkCardProps } from "./work-card.types";
import { format } from "date-fns";
import { Badge } from "../../../../shared";

export const WorkCard: FC<WorkCardProps> = ({
    duration,
    title,
    position,
    description,
    link,
}) => {
    const start = duration[0] ? format(duration[0], "MMMM yyyy") : "Start";
    const end = duration[1] ? format(duration[1], "MMMM yyyy") : "Present";

    return (
        <article className={styles.block}>
            <Badge className={styles.badge}>{position}</Badge>

            {link && (
                <a
                    href={link}
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.link}
                />
            )}
            <p className={styles.year}>
                {start} - {end}
            </p>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </article>
    );
};
