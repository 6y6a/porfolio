import styles from "./hero.module.css";
import { Avatar } from "../../shared";
import avatar from "./image/avatar.jpeg";
import { FC } from "react";
import { HeroProps } from "./hero.types";

export const Hero: FC<HeroProps> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <Avatar
                        src={avatar}
                        width={200}
                        height={200}
                        objectFit={"cover"}
                        priority={true}
                    />
                </div>

                <div className={styles.right}>
                    <h1 className={styles.title}>Gubin Alexey</h1>
                    <h2 className={styles.position}>
                        Senior Frontend <br /> Developer
                    </h2>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.left}>
                    <div className={styles.contact}>
                        <div>Saint-Petersburg, Russia</div>
                        <div>mail: gubinalexeymain@gmail.com</div>
                        <div>tg: @gubinstreet</div>
                        <div>gh: https://github.com/6y6a</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.passion}>
                        <p className={styles.text}>
                            I like to build projects from proof of concepts
                            <span className={styles.textSelection}>
                                {" "}
                                (PoC){" "}
                            </span>
                            and minimum viable products
                            <span className={styles.textSelection}>
                                {" "}
                                (MVP){" "}
                            </span>
                            to complex systems of an enterprise-level.
                        </p>

                        <p className={styles.text}>
                            Talk is cheap. Show me the code.
                        </p>

                        <p className={styles.text}>
                            I have a passion for elegant, innovative and
                            functional user interfaces. Over 5 years of
                            experience in the frontend development, more than 3+
                            enterprise solutions completed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
