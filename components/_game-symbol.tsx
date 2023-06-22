import * as React from "react";
import { SYMBOL_O, SYMBOL_X } from "./_constants";
import { SymbolType } from "./_game";
import { clsx } from "clsx";

type PropsType = {
  symbol: SymbolType;
};

export const _gameSymbol = ({ symbol }: PropsType) => {
  return (
    <span
      className={clsx(
        "text-xl font-semibold leading-6",
        {
          [SYMBOL_X]: "text-red-600",
          [SYMBOL_O]: "text-green-600",
        }[symbol]
      )}
    >
      {symbol}
    </span>
  );
};
