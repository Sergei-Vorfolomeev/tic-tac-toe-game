import * as React from "react";
import Image from "next/image";

type PropsType = {
  name: string;
  rating: number;
  avatar: string;
};

export function Player({ name, rating, avatar }: PropsType) {
  return (
    <div className="flex items-center gap-2 text-start text-teal-600 w-44">
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
}
