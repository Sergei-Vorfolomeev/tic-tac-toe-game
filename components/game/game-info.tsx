import * as React from "react";
import { Profile } from "../profile";
import { clsx } from "clsx";
import { CrossIcon } from "./icons/cross-icon";
import { CircleIcon } from "./icons/circle-icon";

export const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white shadow-md rounded-2xl px-8 py-4 flex justify-between"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200 " />
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-200 " />
        <div className="relative flex">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">
            <CircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};