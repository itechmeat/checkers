import { FC, PropsWithChildren, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { User } from "../User/User";
import styles from "./Headline.module.scss";

type HeadlineProps = {
  userSlot?: ReactNode;
};

export const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  userSlot,
  children,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to="/" className={styles.logo}>
          Logo
        </NavLink>
        <Navigation />
        {children && <div className={styles.inner}>{children}</div>}
        <div className={styles.space} />
        <User />
      </div>
    </header>
  );
};
