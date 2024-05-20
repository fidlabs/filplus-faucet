import { CSSProperties, ReactNode } from "react";

export default interface IBaseComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
