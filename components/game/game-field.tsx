import * as React from "react";
import { clsx } from "clsx";
import { CircleIcon } from "./icons/circle-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";

type PropsType = {
  className: string;
};

const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }: PropsType) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white shadow-md rounded-2xl px-8 pt-5 pb-7"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
            Turn: <CircleIcon className={"w-5 h-5"} />
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400  leading-tight">
            Next: <CrossIcon className={"w-3 h-3"} />
          </div>
        </div>

        <UiButton className={""} size={"md"} variant={"primary"}>
          Draw
        </UiButton>
        <UiButton className={""} size={"md"} variant={"outline"}>
          Give up
        </UiButton>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
          >
            <CircleIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};
