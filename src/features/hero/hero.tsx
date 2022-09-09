import styles from "./hero.module.css";
import { Avatar } from "../../shared";
import avatar from "./image/avatar.jpeg";
import { FC } from "react";
import { HeroProps } from "./hero.types";

export const Hero: FC<HeroProps> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.avatarWrapper}>
                    <Avatar
                        src={avatar}
                        width={120}
                        height={120}
                        objectFit={"cover"}
                        priority={true}
                    />
                </div>

                <div className={styles.header}>
                    <h1 className={styles.title}>Gubin Alexey</h1>
                    <h2 className={styles.position}>
                        Senior Frontend <br /> Developer
                    </h2>
                </div>

                <div className={styles.contact}>
                    <div>Saint-Petersburg, Russia</div>
                    <div>mail: gubinalexeymain@gmail.com</div>
                    <div>tg: @gubinstreet</div>
                    <div>gh: https://github.com/6y6a</div>

                    <h3>Languages</h3>
                    <div>Russian (native)</div>
                    <div>English (B1)</div>
                </div>

                <div className={styles.passion}>
                    <p>
                        I like to build projects from proof of concepts (PoC)
                        and minimum viable products (MVP) to complex systems of
                        an enterprise-level.
                    </p>

                    <p>Talk is cheap. Show me the code.</p>

                    <p>
                        I have a passion for elegant, innovative and functional
                        user interfaces. Over 5 years of experience in the
                        frontend development, more than 3+ enterprise solutions
                        completed.
                    </p>
                </div>
            </div>
        </div>
    );
};
