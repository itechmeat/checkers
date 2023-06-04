import { NavLink } from "react-router-dom";
import { App as AntApp } from "antd";
import { Router } from "./Router";
import { Layout } from "./features/layout/MainLayout/MainLayout";

const App = () => {
  return (
    <AntApp>
      <Layout>
        <header>
          <NavLink to="/">Home</NavLink>
          <span> | </span>
          <NavLink to="/about">About</NavLink>
          <span> | </span>
          <NavLink to="/games">Games</NavLink>
          <span> | </span>
          <NavLink to="/profiles">Profiles</NavLink>
        </header>

        <Router />
      </Layout>
    </AntApp>
  );
};

export default App;
