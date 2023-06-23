import * as React from "react";
import { ReactNode } from "react";
import { clsx } from "clsx";

type PropsType = {
  children?: ReactNode;
  onClick: () => void;
  isWinner: boolean;
};

export const GameCell = ({ children, onClick, isWinner }: PropsType) => {
  return (
    <button
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-100"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
