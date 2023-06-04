import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Title } from "../../components/Title/Title";

export const CreateGamePage: FC = () => {
  return (
    <div>
      <Title>CreateGamePage</Title>
      <p>
        <NavLink to="..">Go back</NavLink>
      </p>
    </div>
  );
};
