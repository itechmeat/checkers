import { ComponentProps, FC, PropsWithChildren } from "react";
import { Typography } from "antd";

const { Title: AntTitle } = Typography;

type TitleProps = {
  level?: ComponentProps<typeof AntTitle>["level"];
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  level = 1,
  children,
}) => {
  return <AntTitle level={level}>{children}</AntTitle>;
};
