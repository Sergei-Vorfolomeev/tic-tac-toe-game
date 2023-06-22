import * as React from "react";
import { ReactNode } from "react";
import { GameSymbol } from "./game-symbol";
import { SymbolType } from "./constants";

type PropsType = {
  actions: ReactNode;
  currentMove: SymbolType;
  nextMove: SymbolType;
};

export const GameMoveInfo = ({ actions, currentMove, nextMove }: PropsType) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Move: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400  leading-tight">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
};
