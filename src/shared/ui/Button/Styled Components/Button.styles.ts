import styled from "styled-components";
import { ButtonSize } from "../ButtonConstants";

export const StyledButton = styled.button<{
  size: ButtonSize
}>`
  padding: 15px 30px;
  width: 100%;
  background-color: rgb(132, 94, 219);
  border-radius: 55px;
  border: 1px solid white;
  color: white;

  display: flex;
  justify-content: center;
  align-content: center;

  // тут не хватает font-size

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
`;
