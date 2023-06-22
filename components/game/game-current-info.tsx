import * as React from "react";
import { ReactNode } from "react";
import { CircleIcon } from "./icons/circle-icon";
import { CrossIcon } from "./icons/cross-icon";

type PropsType = {
  actions: ReactNode;
};

export const GameCurrentInfo = ({ actions }: PropsType) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Turn: <CircleIcon className={"w-5 h-5"} />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400  leading-tight">
          Next: <CrossIcon className={"w-3 h-3"} />
        </div>
      </div>
      {actions}
    </div>
  );
};
