import * as React from "react";
import { CIRCLE, CROSS, SQUARE, SymbolType, TRIANGLE } from "./constants";
import { CrossIcon } from "../game-new/ui/icons/cross-icon";
import { CircleIcon } from "../game-new/ui/icons/circle-icon";
import { TriangleIcon } from "../game-new/ui/icons/triangle-icon";
import { SquareIcon } from "../game-new/ui/icons/square-icon";

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
