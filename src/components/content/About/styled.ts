import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr minmax(auto, 960px) 1fr;
  -ms-grid-columns: 1fr minmax(50%, 960px) 1fr;
  padding: 3rem 0;
  color: white;
`;

export const StyledContent = styled.div`
  grid-column-start: 2;
  grid-column-end: span 1;
  padding: 0 32px;
`;
