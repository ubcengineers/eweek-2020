import * as React from "react";
import { StyledLogo, StyledWrapper } from "./styled";

interface IProps {
  logo?: string;
  subtitle?: string;
  size?: "full" | "mid";
}

export default (props: IProps) => {
  return (
    <StyledWrapper id="home" style={{}}>
      {props.logo && <StyledLogo src={props.logo} />}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </StyledWrapper>
  );
};
