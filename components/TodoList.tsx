"use client";

import { deleteTodo, toggleTodo } from "@/libs/actions/addtodo.action";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Todos = {
  todos: Todo[];
};

export default function TodoList({ todos }: Todos) {
  // const handleDeleteTodo = async (id: number) => {
  //   //console.log(typeof id);
  //   await deleteTodo(id);
  // };

  //   const handleToggleTodo = async (id: number, completed: boolean) => {
  //     await toggleTodo(id, !completed);
  //   };

  //   const handleDeleteTodo = async (id: number) => {
  //     await deleteTodo(id);
  //   };

  return (
    <ul className="space-y-2 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className=" w-full flex justify-between items-center p-2 border rounded"
        >
          <span
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
          <div className="flex space-x-4">
            <EditTodo todo={todo} />
            <DeleteTodo todo={todo} />
            {/* <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="p-2  bg-slate-100 hover:bg-slate-950 rounded-md"
            >
              <FaTrash size={15} color="red" />
            </button> */}
          </div>
        </li>
      ))}
    </ul>
  );
}
