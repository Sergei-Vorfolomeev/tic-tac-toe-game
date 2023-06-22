import * as React from "react";
import Image from "next/image";
import { clsx } from "clsx";

const avatarDefault = require("./avatar.png") as string;

type PropsType = {
  className?: string;
  name: string;
  rating: number;
  avatar?: string;
};

export const Profile = ({
  className,
  name,
  rating,
  avatar = avatarDefault,
}: PropsType) => {
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
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating: {rating}
        </div>
      </div>
    </div>
  );
};
