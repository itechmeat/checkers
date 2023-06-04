import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Title } from "../../components/Title/Title";

export const GamesListPage: FC = () => {
  return (
    <div>
      <Title>GamesListPage</Title>
      <p>
        <NavLink to="lFHkdsfsd">Some game</NavLink>
      </p>
      <p>
        <NavLink to="create">
          <Button type="primary" icon={<PlusOutlined />}>
            Create new game
          </Button>
        </NavLink>
      </p>
    </div>
  );
};
