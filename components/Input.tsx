import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
};

export default function Input({
  type,
  name,
  placeholder,
  value,
  defaultValue,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required
      className="w-full border-[.5px] border-gray-400 px-2 lg:px-4 py-2 rounded-md"
    />
  );
}
