import "./Button.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="button-styles">{children}</button>;
};

export default Button;
