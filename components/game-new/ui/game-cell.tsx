import * as React from "react";
import { clsx } from "clsx";
import { GameSymbol } from "../../_game_old/game-symbol";
import { SymbolType } from "../constants";
import { memo } from "react";

type PropsType = {
  index: number;
  disabled: boolean;
  isWinner: boolean;
  onClick: (index: number) => void;
  symbol: SymbolType;
};

export const GameCell = memo(function GameCell({
  index,
  disabled,
  isWinner,
  onClick,
  symbol,
}: PropsType) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-100"
      )}
      onClick={() => onClick(index)}
    >
      {symbol && <GameSymbol symbol={symbol} className={"w-5 h-5"} />}
    </button>
  );
});
