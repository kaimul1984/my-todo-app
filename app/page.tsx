import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { getTodos } from "@/libs/actions/addtodo.action";
import React from "react";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="w-screen h-screen relative">
      <div className="w-[90%] max-w-[500px] m-auto h-full flex flex-col gap-6 items-center py-20">
        <h1 className="w-full text-center bg-slate-200 text-black px-4 py-2 rounded-md">
          My Todo App
        </h1>
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
