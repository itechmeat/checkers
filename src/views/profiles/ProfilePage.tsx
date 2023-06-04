import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Title } from "../../components/Title/Title";

export const ProfilePage: FC = () => {
  return (
    <div>
      <Title>ProfilePage</Title>
      <p>...your data is here...</p>
      <p>
        <NavLink to="..">Go back</NavLink>
      </p>
    </div>
  );
};
