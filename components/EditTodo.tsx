"use client";
import React, { FormEventHandler, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Button from "./Button";
import NewTodo from "./NewTodo";
import { editTodo } from "@/libs/actions/addtodo.action";
import Input from "./Input";
import Form from "./Form";
import { useRouter } from "next/navigation";

interface todoProps {
  id: string;
  title: string;
  completed: boolean;
  createdAt?: Date;
}

export default function EditTodo({ todo }: { todo: todoProps }) {
  const [editTodoState, setEditTodoState] = useState(false);
  const [textToEdit, setTextToEdit] = useState<string>(todo.title);
  const router = useRouter();

  const handleEdit = () => {
    setEditTodoState(!editTodoState);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setEditTodoState(false);
    router.refresh;
  };

  return (
    <div>
      <Button
        type="button"
        className="p-2  bg-slate-100 hover:bg-slate-500 rounded-md"
        icon={<FaRegEdit size={15} />}
        onClick={handleEdit}
      />

      <div
        className={`${
          editTodoState ? "scale-100" : "scale-0 opacity-0"
        } w-screen h-screen absolute top-0 left-0 bg-slate-900/50 flex items-center justify-center transition-all duration-150 ease-in-out`}
      >
        <div className=" relative w-[90%] max-w-[500px] bg-slate-100 py-4 rounded-md flex flex-col items-center justify-center">
          <button
            onClick={() => setEditTodoState(false)}
            className="absolute size-8 top-2 right-2 bg-slate-800 text-white text-center font-bold text-lg  rounded-full"
          >
            X
          </button>
          <h2 className=" w-max text-center text-black px-4 py-1">Edit task</h2>
          <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
            <Form action={editTodo} setOpenModel={setEditTodoState}>
              <Input type="hidden" name="inputId" value={todo.id} />
              <div className="flex">
                <input
                  type="text"
                  name="newTitle"
                  placeholder="Edit todo..."
                  defaultValue={textToEdit}
                  className="lg:w-full border-[.5px] px-2 lg:px-4 py-2 rounded-md"
                />
                <Button
                  type="submit"
                  text="Save"
                  className="py-2 px-4 bg-slate-950 text-white ml-2 lg:ml-4 rounded-md"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
