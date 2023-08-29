import { ReactNode } from "react";
import * as Styles from "./styles";

type GridProps = {
  children: ReactNode;
  row: number;
  col: number;
  gap: number;
};

const Grid = ({ children, ...props }: GridProps): JSX.Element => {
  return <Styles.Grid {...props}>{children}</Styles.Grid>;
};

export default Grid;
