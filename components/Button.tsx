import React, { ReactNode } from "react";
import { RiLoader2Fill } from "react-icons/ri";

type ButtonProps = {
  type: "button" | "submit";
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className: string;
  pending?: boolean;
};

export default function Button({
  type,
  text,
  icon,
  onClick,
  className,
  pending,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={pending}
    >
      {pending ? <RiLoader2Fill className="animate-spin" /> : text}
      {icon}
    </button>
  );
}
