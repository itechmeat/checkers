import { FC, PropsWithChildren } from "react";
import { Breadcrumb, theme } from "antd";
import { Headline } from "../Headline/Headline";
import { Footer } from "../Footer/Footer";
import styles from "./MainLayout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className={styles.layout}>
      <Headline />

      <div className={styles.content}>
        {/* https://ant.design/components/breadcrumb#components-breadcrumb-demo-react-router */}
        <Breadcrumb
          className={styles.breadcrumbs}
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        />

        <main className={styles.main} style={{ background: colorBgContainer }}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};
