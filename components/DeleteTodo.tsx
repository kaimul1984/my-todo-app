"use client";
import { useState } from "react";
import Button from "./Button";
import { FaTrash } from "react-icons/fa6";
import { deleteTodo } from "@/libs/actions/addtodo.action";
import Input from "./Input";
import Form from "./Form";
import Model from "./Model";
import { Todo } from "@/types";

export default function DeleteTodo({ todo }: { todo: Todo }) {
  const [deleteTodoState, setDeleteTodoState] = useState(false);

  const handleEdit = () => {
    setDeleteTodoState(!deleteTodoState);
  };

  const handleSubmit = () => {
    setDeleteTodoState(false);
  };

  return (
    <>
      <Button
        type="button"
        className="p-2  bg-slate-100 hover:bg-slate-500 rounded-md"
        icon={<FaTrash size={15} color="red" />}
        onClick={handleEdit}
      />

      <Model openModel={deleteTodoState} setOpenModel={setDeleteTodoState}>
        <h2 className=" w-max text-center text-black px-4 py-1">
          Are you sure you want to delete this?
        </h2>
        <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
          <Form action={deleteTodo} onSubmit={handleSubmit}>
            <Input type="hidden" name="inputId" value={todo.id} />

            <Button
              type="submit"
              text="Yes"
              className="py-2 px-4 bg-slate-950 text-white ml-2 lg:ml-4 rounded-md"
            />
          </Form>
        </div>
      </Model>
    </>
  );
}

{
  /* <form action={deleteTodo}>
            <input type="hidden" name="id" value={todo.id} />
            <button className="rounded-md bg-red-700 p-1">Delete</button>
          </form> */
}
