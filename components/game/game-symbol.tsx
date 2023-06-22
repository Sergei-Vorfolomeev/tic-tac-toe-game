import * as React from "react";
import { CIRCLE, CROSS, SQUARE, SymbolType, TRIANGLE } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { CircleIcon } from "./icons/circle-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";

type PropsType = {
  symbol: SymbolType;
  className?: string;
};

export const GameSymbol = ({ symbol, className }: PropsType) => {
  const Icon =
    {
      [CROSS]: CrossIcon,
      [CIRCLE]: CircleIcon,
      [TRIANGLE]: TriangleIcon,
      [SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
};
