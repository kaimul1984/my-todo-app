"use client";
import { useState } from "react";
import Button from "./Button";
import { FaTrash } from "react-icons/fa6";
import { deleteTodo } from "@/libs/actions/addtodo.action";
import Input from "./Input";
import Form from "./Form";
interface todoProps {
  id: string;
  title: string;
  completed: boolean;
  createdAt?: Date;
}
export default function DeleteTodo({ todo }: { todo: todoProps }) {
  const [deleteTodoState, setDeleteTodoState] = useState(false);

  const handleEdit = () => {
    setDeleteTodoState(!deleteTodoState);
  };

  return (
    <>
      <Button
        type="button"
        className="p-2  bg-slate-100 hover:bg-slate-500 rounded-md"
        icon={<FaTrash size={15} />}
        onClick={handleEdit}
      />

      <div
        className={`${
          deleteTodoState ? "scale-100" : "scale-0 opacity-0"
        } w-screen h-screen absolute top-0 left-0 bg-slate-900/50 flex items-center justify-center transition-all duration-150 ease-in-out`}
      >
        <div className=" relative w-[90%] max-w-[500px] bg-slate-100 py-4 rounded-md flex flex-col items-center justify-center">
          <button
            onClick={() => setDeleteTodoState(false)}
            className="absolute size-8 top-2 right-2 bg-slate-800 text-white text-center font-bold text-lg  rounded-full"
          >
            X
          </button>
          <h2 className=" w-max text-center text-black px-4 py-1">
            Are you sure to delete this?
          </h2>
          <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
            <Form action={deleteTodo} setOpenModel={setDeleteTodoState}>
              <Input type="hidden" name="inputId" value={todo.id} />

              <Button
                type="submit"
                text="Yes"
                className="py-2 px-4 bg-slate-950 text-white ml-2 lg:ml-4 rounded-md"
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <form action={deleteTodo}>
            <input type="hidden" name="id" value={todo.id} />
            <button className="rounded-md bg-red-700 p-1">Delete</button>
          </form> */
}
