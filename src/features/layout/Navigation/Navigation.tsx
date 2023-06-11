import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Navigation.module.scss";

export const Navigation: FC = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Games",
      path: "/games",
    },
    {
      title: "Profiles",
      path: "/profiles",
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li className={styles.item} key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                cn(styles.link, isActive ? styles.active : styles.passive)
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
