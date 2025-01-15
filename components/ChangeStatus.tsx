// import React from "react";
// import Form from "./Form";
// import { Todo } from "@/types";
// import { changeStatus } from "@/libs/actions/addtodo.action";

// export default function ChangeStatus({ todo }: { todo: Todo }) {
//   return (
//     <Form action={changeStatus}>
//       <input type="hidden" name="inputId" value={todo.id} />
//       <input type="checkbox"  />
//     </Form>
//   );
// }
"use client"; // Required since we're handling form submission in the client

import React, { useRef } from "react";
import Form from "./Form";
import { Todo } from "@/types";
import { changeStatus } from "@/libs/actions/addtodo.action";

export default function ChangeStatus({ todo }: { todo: Todo }) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Use requestSubmit() instead of submit()
    }
  };

  return (
    <form ref={formRef} action={changeStatus}>
      <input type="hidden" name="inputId" value={todo.id} />
      <input
        type="checkbox"
        defaultChecked={todo.completed} // Reflect current status
        onChange={handleChange} // Trigger submission
      />
    </form>
  );
}
