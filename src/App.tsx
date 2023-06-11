import { App as AntApp } from "antd";
import { Router } from "./Router";
import { Layout } from "./features/layout/MainLayout/MainLayout";

const App = () => {
  return (
    <AntApp>
      <Layout>
        <Router />
      </Layout>
    </AntApp>
  );
};

export default App;
