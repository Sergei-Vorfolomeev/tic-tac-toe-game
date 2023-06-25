import * as React from "react";
import { clsx } from "clsx";
import { GameSymbol } from "../../game/game-symbol";
import { SymbolType } from "../constants";

type PropsType = {
  disabled: boolean;
  isWinner: boolean;
  onClick: () => void;
  symbol: SymbolType;
};

export function GameCell({ disabled, isWinner, onClick, symbol }: PropsType) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-100"
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} className={"w-5 h-5"} />}
    </button>
  );
}
