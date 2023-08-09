import { ReactNode } from "react";
import * as Styles from "./styles";

type GridProps = {
  children: ReactNode;
};

const Grid = ({ children }: GridProps): JSX.Element => {
  return <Styles.Grid>{children}</Styles.Grid>;
};

export default Grid;
