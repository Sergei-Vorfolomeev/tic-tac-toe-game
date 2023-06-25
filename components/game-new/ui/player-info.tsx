import * as React from "react";
import { clsx } from "clsx";
import { Profile } from "../../profile";
import { GameSymbol } from "./game-symbol";
import { SymbolType } from "../constants";
import { Player } from "./player";

export type PlayerType = {
  id: number;
  name: string;
  rating: number;
  avatar: string;
  symbol: SymbolType;
};

type PropsType = {
  player: PlayerType;
  isRight: boolean;
  isTimerRunning: boolean;
  seconds: number;
};

export function PlayerInfo({
  player,
  isRight,
  isTimerRunning,
  seconds,
}: PropsType) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Player
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">
          <GameSymbol symbol={player.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
