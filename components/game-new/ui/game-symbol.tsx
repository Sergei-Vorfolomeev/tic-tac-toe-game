import * as React from "react";
import { SquareIcon } from "./icons/square-icon";
import { CrossIcon } from "./icons/cross-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { CircleIcon } from "./icons/circle-icon";
import { CIRCLE, CROSS, SQUARE, SymbolType, TRIANGLE } from "../constants";

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
