import React from "react";
import Model from "./Model";
import { createTodo } from "@/libs/actions/addtodo.action";
import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

type NewTodoProps = {
  setOpenModel: (openModel: boolean) => boolean | void;
};

export default function NewTodo({ setOpenModel }: NewTodoProps) {
  return (
    <>
      <h2 className=" w-max text-center text-black px-4 py-1">Add New Todo</h2>
      <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
        <Form action={createTodo} setOpenModel={setOpenModel}>
          <Input type="text" name="title" placeholder="Add Your todo here" />
          <Button
            type="submit"
            text="Submit"
            className="py-2 px-4 bg-slate-950 text-white ml-2 lg:ml-4 rounded-md"
          />
        </Form>
      </div>
    </>
  );
}

// <form
//           action={async (formData: FormData) => {
//             await createTodo(formData);
//             setOpenModel(false);
//           }}
//           className="w-full flex items-center justify-center"
//         >
//           <input
//             type="text"
//             name="title"
//             placeholder="Add Your todo here"
//             className="lg:w-full border-[.5px] px-2 lg:px-4 py-2 rounded-md"
//           />
//           <button
//             type="submit"
//             className="py-2 px-4 bg-slate-950 text-white ml-2 lg:ml-4 rounded-md"
//           >
//             Submit
//           </button>
//         </form>
