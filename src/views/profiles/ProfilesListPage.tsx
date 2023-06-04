import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Title } from "../../components/Title/Title";

export const ProfilesListPage: FC = () => {
  return (
    <div>
      <Title>ProfilesListPage</Title>
      <p>
        <NavLink to="techmeat">Your profile</NavLink>
      </p>
    </div>
  );
};
