import styled from "styled-components";

export const StyledTextInput = styled.input`
  width: calc(100% - 32px);
  font-size: 1em;
  color: #000000;
  outline: 0;
  padding: 16px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 8px;
`;

export const StyledSubmit = styled.button`
  font-size: 1em;
  color: #000000;
  outline: 0;
  margin-top: 8px;
  padding: 8px 16px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 8px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
  &:active {
    background: #ff9f9f;
  }
`;
