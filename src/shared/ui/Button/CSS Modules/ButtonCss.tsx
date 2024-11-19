import { PropsWithChildren } from "react";
import styles from './Button.module.scss';
import classNames from "classnames";
import { ButtonFontSize, ButtonSize } from "../ButtonConstants";

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  text: string;
  size?: ButtonSize;
}

export const Button = ({
  text,
  size = ButtonSize.M,
  ...props
}: ButtonProps) => (
  <button
    className={
      classNames(
        styles.button,
        // тут не хватает дополнительного класса, который берется из ButtonFontSize в зависимости от size
      )}
    {...props}
  >
    <p className={classNames(styles.text)}>{text}</p>
  </button>
)