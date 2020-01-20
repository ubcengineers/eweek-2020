import * as React from "react";
import { StyledContent, StyledWrapper } from "./styled";

import "./color.css";

interface IProps {
  color:
    | "white"
    | "blue"
    | "red"
    | "yellow"
    | "full white"
    | "full red"
    | "full blue"
    | "full yellow";
  children: React.ReactNode;
  center?: boolean;
}

export default (props: IProps) => {
  return (
    <StyledWrapper className={props.color + (props.center ? " center" : "")}>
      <StyledContent>{props.children}</StyledContent>
    </StyledWrapper>
  );
};
