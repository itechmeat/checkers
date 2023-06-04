import { ComponentProps, FC, PropsWithChildren } from "react";
import { Typography } from "antd";

const { Text: AntText } = Typography;

type TextProps = ComponentProps<typeof AntText>;

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  return <AntText {...props}>{children}</AntText>;
};
