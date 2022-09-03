import styles from "./header.module.css";
import { FC } from "react";
import { HeaderProps } from "./header.types";

const menu = [
    { href: "#", name: "About" },
    { href: "#", name: "Experience" },
    {
        href: "#",
        name: "Education",
    },
    { href: "#", name: "Skills" },
    { href: "#", name: "Projects" },
    { href: "#", name: "Blog" },
];

export const Header: FC<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            Logo here
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {menu.map((item) => (
                        <li key={item.name} className={styles.item}>
                            <a href={item.href} className={styles.link}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>test</div>
        </header>
    );
};
