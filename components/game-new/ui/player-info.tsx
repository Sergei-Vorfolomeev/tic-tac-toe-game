import * as React from "react";
import { clsx } from "clsx";
import { GameSymbol } from "./game-symbol";
import { SymbolType } from "../constants";
import { Player } from "./player";
import { useNow } from "../../libs/timers";

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
  timer: number;
  timerStartAt: number;
};

export function PlayerInfo({
  player,
  isRight,
  timer,
  timerStartAt,
}: PropsType) {
  const now = useNow(1000, !!timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mils / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
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
