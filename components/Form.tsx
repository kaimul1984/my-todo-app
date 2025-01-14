import React, { ReactNode } from "react";

type Formprops = {
  action: (formData: FormData) => void;
  children: ReactNode;
  setOpenModel: (openModel: boolean) => boolean | void;
  onSubmit?: () => void;
};

export default function Form({
  action,
  children,
  setOpenModel,
  onSubmit,
}: Formprops) {
  return (
    <form
      action={async (formData: FormData) => {
        await action(formData);
        setOpenModel(false);
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
