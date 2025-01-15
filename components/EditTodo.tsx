"use client";
import React, { useActionState, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Button from "./Button";

import { editTodo } from "@/libs/actions/addtodo.action";
import Input from "./Input";
import Form from "./Form";

import Model from "./Model";
import { Todo } from "@/types";
import { RiLoader2Fill } from "react-icons/ri";

const initialState = {
  message: "",
};

export default function EditTodo({ todo }: { todo: Todo }) {
  const [editTodoState, setEditTodoState] = useState(false);
  const [textToEdit, setTextToEdit] = useState<string>(todo.title);
  const [state, formAction, pending] = useActionState(editTodo, initialState);

  const handleEdit = () => {
    if (todo.completed) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setEditTodoState(false);
    }, 300);
  };

  useEffect(() => {
    setTextToEdit(todo.title);
  }, [todo.title]);

  return (
    <div>
      <Button
        type="button"
        className={`${
          todo.completed
            ? "text-gray-300 pointer-events-none"
            : " hover:bg-slate-500 hover:text-white"
        } p-2 rounded-md bg-slate-100`}
        icon={<FaRegEdit size={15} />}
        onClick={handleEdit}
      />

      <Model openModel={editTodoState} setOpenModel={setEditTodoState}>
        <h2 className=" w-max text-center text-black px-4 py-1">Edit task</h2>
        <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
          <Form action={formAction} onSubmit={handleSubmit}>
            <Input type="hidden" name="inputId" value={todo.id} />

            <input
              type="text"
              name="newTitle"
              placeholder="Edit todo..."
              defaultValue={textToEdit}
              className="w-full border-[.5px] px-2 lg:px-4 py-2 rounded-md capitalize"
            />
            <p aria-live="polite">{state?.message}</p>
            <Button
              type="submit"
              pending={pending}
              text="Save"
              className="py-2 px-4 bg-slate-950 text-white  rounded-md"
            />
          </Form>
        </div>
      </Model>
    </div>
  );
}
