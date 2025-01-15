import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { getTodos } from "@/libs/actions/addtodo.action";
import Image from "next/image";
import React from "react";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="w-screen h-screen relative">
      <div className="w-[90%] max-w-[500px] m-auto h-full flex flex-col gap-6 items-center py-20">
        <div className="w-full flex items-center justify-center gap-4 bg-slate-200 px-4 py-2  rounded-md">
          <Image src="/tasks.png" alt="logo" width={30} height={30} />
          <h1 className=" text-center  text-black ">My Todo App</h1>
        </div>
        <AddTodo />
        {todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <div className="bg-slate-200 p-6 w-full rounded-md">
            <p className="text-center">
              No Todo found. <br />
              Click Add todo button to add some todo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
