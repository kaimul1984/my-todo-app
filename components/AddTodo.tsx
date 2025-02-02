"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "./Button";
import NewTodo from "./NewTodo";

export default function AddTodo() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => setOpenModel(!openModel)}
        text="Add Todo"
        icon={<FaPlus />}
        className="px-12 py-2 bg-slate-800 text-white ml-4 flex gap-2 items-center cursor-pointer rounded-md"
      />

      <NewTodo openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}
