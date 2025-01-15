import React, { ReactNode } from "react";

type Formprops = {
  action: (formData: FormData) => void;
  children: ReactNode;
  // setOpenModel: (openModel: boolean) => boolean | void;
  onSubmit?: () => void;
};

export default function Form({
  action,
  children,

  onSubmit,
}: Formprops) {
  return (
    <form
      action={async (formData: FormData) => {
        await action(formData);
      }}
      onSubmit={onSubmit}
      className="w-full flex items-center justify-center gap-2 px-4"
    >
      {children}
    </form>
  );
}
