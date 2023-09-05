import { ReactNode } from "react";
import * as Styles from "./styles";

type GridProps = {
  children: ReactNode;
  row: number;
  col: number;
  gap: number;
};

const Grid = ({
  children,
  col,
  row,
  gap,
  ...props
}: GridProps): JSX.Element => {
  return (
    <Styles.Grid $col={col} $row={row} $gap={gap} {...props}>
      {children}
    </Styles.Grid>
  );
};

export default Grid;
