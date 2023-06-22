import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
};

export const GameCell = ({ children }: PropsType) => {
  return (
    <button className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
};
