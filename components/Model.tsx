import React, { ReactNode } from "react";

type ModelProps = {
  openModel: boolean;
  setOpenModel: (openModel: boolean) => boolean | void;
  children: ReactNode;
};

export default function Model({
  openModel,
  setOpenModel,
  children,
}: ModelProps) {
  return (
    <div
      className={`${
        openModel ? "scale-100" : "scale-0 opacity-0"
      } w-screen h-screen absolute top-0 left-0 bg-slate-900/50 flex items-center justify-center transition-all duration-150 ease-in-out`}
    >
      <div className=" relative w-[90%] max-w-[500px] bg-slate-100 py-4 rounded-md flex flex-col items-center justify-center">
        <button
          onClick={() => setOpenModel(false)}
          className="absolute size-8 top-2 right-2 bg-slate-800 text-white text-center font-bold text-lg  rounded-full"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
