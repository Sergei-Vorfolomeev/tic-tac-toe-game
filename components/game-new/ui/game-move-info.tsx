import * as React from "react";
import { GameSymbol } from "../../_game_old/game-symbol";
import { SymbolType } from "../constants";

type PropsType = {
  currentMove: SymbolType;
  nextMove: SymbolType;
};

export function GameMoveInfo({ currentMove, nextMove }: PropsType) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
        Move: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400  leading-tight">
        Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
