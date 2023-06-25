import { useState } from "react";
import { CROSS, SymbolType } from "../constants";
import { computeWinner } from "./compute-winner";
import { getNextMove } from "./get-next-move";

export type GameStateType = {
  cells: SymbolType[];
  currentMove: SymbolType;
  playersTimeOver: SymbolType[];
};

export const useGameState = (playersCount: number) => {
  const [{ cells, currentMove, playersTimeOver }, setGameState] =
    useState<GameStateType>(() => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: CROSS,
      playersTimeOver: [],
    }));

  const winnerSequence: number[] = computeWinner(cells);
  const nextMove: SymbolType = getNextMove(
    currentMove,
    playersCount,
    playersTimeOver
  );

  const winnerSymbol: SymbolType =
    currentMove === nextMove ? currentMove : cells[winnerSequence?.[0]];

  const onCellClickHandler = (cellIndex: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[cellIndex]) return lastGameState;
      return {
        ...lastGameState,
        cells: lastGameState.cells.map((cell, index) =>
          index === cellIndex ? lastGameState.currentMove : cell
        ),
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          playersTimeOver
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol: SymbolType) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          playersTimeOver
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    onCellClickHandler,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  };
};