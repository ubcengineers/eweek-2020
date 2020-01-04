import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  text-align: center;

  & h2 {
    font-family: "Unisono", sans-serif;
  }
`;

export const StyledLogo = styled.img`
  max-width: 30vw;
  min-width: 350px;
  background: radial-gradient(rgba(255, 255, 255, 0.05) 50%, transparent 70%);
`;
