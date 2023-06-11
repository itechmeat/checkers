import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import styles from "./User.module.scss";

export const User: FC = () => {
  return (
    <div className={styles.user}>
      <NavLink to="/profiles/me">
        <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
          U
        </Avatar>
      </NavLink>
    </div>
  );
};
