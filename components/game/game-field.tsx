import * as React from "react";
import { UiButton } from "../uikit/ui-button";
import { GameFieldLayout } from "./game-field-layout";
import { GameMoveInfo } from "./game-move-info";
import { GameGrid } from "./game-grid";
import { GameCell } from "./game-cell";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./hooks/use-game-state";

type PropsType = {
  playersCount: number;
  className: string;
};

export const GameField = ({ className, playersCount }: PropsType) => {
  const { cells, currentMove, nextMove, onCellClickHandler } =
    useGameState(playersCount);

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
        {cells.map((symbol, i) => (
          <GameCell key={i} onClick={() => onCellClickHandler(i)}>
            {symbol && <GameSymbol symbol={symbol} className={"w-5 h-5"} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
