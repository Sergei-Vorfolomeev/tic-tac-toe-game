import * as React from "react";
import { _gameSymbol } from "./_game-symbol";
import { SymbolType } from "./_game";
import { clsx } from "clsx";

type PropsType = {
  symbol: SymbolType;
  onClick: () => void;
  isWinner: boolean | undefined;
};

export const _gameCell = ({ symbol, onClick, isWinner }: PropsType) => {
  return (
    <button
      className={clsx(
        "border border-gray-400 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-red-100"
      )}
      onClick={onClick}
    >
      {symbol ? <_gameSymbol symbol={symbol} /> : null}
    </button>
  );
};
