import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
  onClick: () => void;
};

export const GameCell = ({ children, onClick }: PropsType) => {
  return (
    <button
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
