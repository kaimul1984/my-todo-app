import React, { useActionState } from "react";
import Model from "./Model";
import { createTodo } from "@/libs/actions/addtodo.action";
import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

type NewTodoProps = {
  openModel: boolean;
  setOpenModel: (openModel: boolean) => boolean | void;
};

const initialState = {
  message: "",
};

export default function NewTodo({ openModel, setOpenModel }: NewTodoProps) {
  const [state, actionForm, pending] = useActionState(createTodo, initialState);

  const handleSubmit = () => {
    setTimeout(() => {
      setOpenModel(false);
    }, 150);
  };
  return (
    <Model openModel={openModel} setOpenModel={setOpenModel}>
      <h2 className=" w-max text-center text-black px-4 py-1">Add New Todo</h2>
      <div className="w-full  lg:px-4 py-8 flex items-center justify-center">
        <Form action={actionForm} onSubmit={handleSubmit}>
          <Input type="text" name="title" placeholder="Add Your todo here" />
          <p aria-live="polite">{state?.message}</p>

          <Button
            type="submit"
            text="Submit"
            pending={pending}
            className="py-2 px-4 bg-slate-950 text-white  rounded-md"
          />
        </Form>
      </div>
    </Model>
  );
}
