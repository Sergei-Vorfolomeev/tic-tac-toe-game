import * as React from "react";
import { Profile } from "../profile";
import { GameSymbol } from "../game/game-symbol";
import { SymbolType } from "../game/constants";
import { PlayerType } from "../game/game-info";
import { clsx } from "clsx";

type PropsType = {
  playerInfo: PlayerType;
  isRight: boolean;
};

export const PlayerInfo = ({ playerInfo, isRight }: PropsType) => {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex justify-center items-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold",
          isRight && "order-1"
        )}
      >
        01:08
      </div>
    </div>
  );
};
