import { useState } from "react";
import { CROSS, MOVE_ORDER, SymbolType } from "../constants";

function getNextMove(
  currentMove: SymbolType,
  playersCount: number
): SymbolType {
  const slicedMovedOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMovedOrder.indexOf(currentMove) + 1;
  return slicedMovedOrder[nextMoveIndex] ?? slicedMovedOrder[0];
}

export const useGameState = (playersCount: number) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: CROSS,
  }));
  const nextMove = getNextMove(currentMove, playersCount);

  const onCellClickHandler = (cellIndex: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[cellIndex]) return lastGameState;
      return {
        ...lastGameState,
        cells: lastGameState.cells.map((cell, index) =>
          index === cellIndex ? lastGameState.currentMove : cell
        ),
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
      };
    });
  };
  return {
    cells,
    currentMove,
    nextMove,
    onCellClickHandler,
  };
};
