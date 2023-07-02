import * as React from "react";
import { UiButton } from "../uikit/ui-button";
import { GameFieldLayout } from "./game-field-layout";
import { GameMoveInfo } from "./game-move-info";
import { GameGrid } from "./game-grid";
import { GameCell } from "./game-cell";
import { GameSymbol } from "./game-symbol";
import { SymbolType } from "./constants";

type PropsType = {
  playersCount: number;
  className: string;
  cells: SymbolType[];
  currentMove: SymbolType;
  nextMove: SymbolType;
  onCellClickHandler: (cellIndex: number) => void;
  winnerSequence: number[];
  winnerSymbol: SymbolType;
};

export const GameField = ({
  className,
  onCellClickHandler,
  cells,
  nextMove,
  currentMove,
  winnerSequence,
  winnerSymbol,
}: PropsType) => {
  const actions = (
    <>
      <UiButton className={""} size={"md"} variant={"primary"}>
        Draw
      </UiButton>
      <UiButton className={""} size={"md"} variant={"outline"}>
        Give up
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => onCellClickHandler(index)}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
          >
            {symbol && <GameSymbol symbol={symbol} className={"w-5 h-5"} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
