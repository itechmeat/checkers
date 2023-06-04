import { FC, PropsWithChildren, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Headline.module.scss";

type HeadlineProps = {
  navSlot?: ReactNode;
  userSlot?: ReactNode;
};

export const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  navSlot,
  userSlot,
  children,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to="/" className={styles.logo}>
          Logo
        </NavLink>
        {navSlot}
        {children && <div className={styles.inner}>{children}</div>}
        <div className={styles.space} />
        {userSlot}
      </div>
    </header>
  );
};
