import { useState } from "react";
import { CROSS, MOVE_ORDER, SymbolType } from "../constants";

function getNextMove(currentMove: SymbolType): SymbolType {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export const useGameState = () => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: CROSS,
  }));
  const nextMove = getNextMove(currentMove);

  const onCellClickHandler = (cellIndex: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[cellIndex]) return lastGameState;
      return {
        ...lastGameState,
        cells: lastGameState.cells.map((cell, index) =>
          index === cellIndex ? lastGameState.currentMove : cell
        ),
        currentMove: getNextMove(lastGameState.currentMove),
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
