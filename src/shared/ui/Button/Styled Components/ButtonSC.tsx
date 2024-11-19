import { PropsWithChildren } from "react";
import { ButtonText, StyledButton } from "./Button.styles";
import { ButtonSize } from "../ButtonConstants";

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  text: string;
  size?: ButtonSize;
}

export const ButtonSC = ({
  text,
  size = ButtonSize.M,
  ...props
}: ButtonProps) => (
  <StyledButton size={size} {...props}>
    <ButtonText>{text}</ButtonText>
  </StyledButton>
)