import * as React from "react";
import Image from "next/image";
import { clsx } from "clsx";

const avatar = require("./avatar.png") as string;

type PropsType = {
  className?: string;
};

export const Profile = ({ className }: PropsType) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600"
      )}
    >
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full"
        width="48"
        heigth="48"
        unoptimized
      />
      <div>
        <div className="text-lg leading-tight">SergeyV</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
      </div>
    </div>
  );
};
