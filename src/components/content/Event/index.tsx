import * as React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const StyledInfo = styled.div`
  max-width: 30%;
  display: flex;
  flex-flow: column wrap;
  margin-right: auto;
`;

const StyledName = styled.div`
  margin-right: 1rem;
  font-size: 1.2rem;
  line-height: 1;
`;

const StyledDescription = styled.div`
  opacity: 0.8;
  line-height: 1;
  margin: 0.3rem 0;
`;

const StyledScore = styled.div`
  width: 3rem;
  padding: 0.5rem 1rem;
  opacity: 0.8;
  line-height: 1;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
`;

interface IProps {
  name: string;
  description: string;
  scores: string[];
}

const Event = (props: IProps) => (
  <StyleWrapper>
    <StyledInfo>
      <StyledName>{props.name}</StyledName>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledInfo>

    {props.scores.map((value, i) => (
      <StyledScore key={i}>{value}</StyledScore>
    ))}
  </StyleWrapper>
);

export default Event;
