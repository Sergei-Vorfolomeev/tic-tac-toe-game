import * as React from "react";
import { clsx } from "clsx";
import { PlayerInfo } from "../player";
import { CIRCLE, CROSS, SQUARE, SymbolType, TRIANGLE } from "./constants";

export type PlayerType = {
  id: number;
  name: string;
  rating: number;
  avatar: string;
  symbol: SymbolType;
};

const avatarDefault = require("../profile/avatar.png") as string;
const avatarSrc1 = require("../player/avatar-1.png") as string;
const avatarSrc2 = require("../player/avatar-2.png") as string;
const avatarSrc3 = require("../player/avatar-3.png") as string;

const players: PlayerType[] = [
  {
    id: 1,
    name: "SergeyV",
    rating: 1230,
    avatar: avatarDefault,
    symbol: CROSS,
  },
  {
    id: 2,
    name: "Always happyyyyyyyyyyyyyyy",
    rating: 867,
    avatar: avatarSrc1,
    symbol: CIRCLE,
  },
  {
    id: 3,
    name: "Unforgotten",
    rating: 938,
    avatar: avatarSrc2,
    symbol: TRIANGLE,
  },
  {
    id: 4,
    name: "Lara",
    rating: 1106,
    avatar: avatarSrc3,
    symbol: SQUARE,
  },
];

type PropsType = {
  playersCount: number;
  className: string;
};

export const GameInfo = ({ className, playersCount }: PropsType) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white shadow-md rounded-2xl px-8 py-4 grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={!!(index % 2)}
        />
      ))}
      {/*<div className="flex gap-3 items-center">*/}
      {/*  <div className="relative">*/}
      {/*    <Profile className="w-44" />*/}
      {/*    <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">*/}
      {/*      <CrossIcon />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="h-6 w-px bg-slate-200 " />*/}
      {/*  <div className="text-slate-900 text-lg font-semibold">01:08</div>*/}
      {/*</div>*/}

      {/*<div className="flex gap-3 items-center">*/}
      {/*  <div className="text-orange-600 text-lg font-semibold">00:08</div>*/}
      {/*  <div className="h-6 w-px bg-slate-200 " />*/}
      {/*  <div className="relative flex">*/}
      {/*    <Profile className="w-44" />*/}
      {/*    <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">*/}
      {/*      <CircleIcon />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
