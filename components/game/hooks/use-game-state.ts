import { useState } from "react";
import { CROSS } from "../constants";
import { computeWinner, getNextMove } from "../model";

export const useGameState = (playersCount: number) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: CROSS,
  }));

  const winnerSequence = computeWinner(cells);
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
    winnerSequence,
  };
};
