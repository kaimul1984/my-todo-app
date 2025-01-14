import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  type: "button" | "submit";
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className: string;
};

export default function Button({
  type,
  text,
  icon,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
      {icon}
    </button>
  );
}
