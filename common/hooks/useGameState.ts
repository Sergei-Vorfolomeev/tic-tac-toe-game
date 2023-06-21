import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "../../components/constants";
import { SymbolType } from "../../components/game";

export const computeWinner = (cells: SymbolType[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export const useGameState = () => {
  const [cells, setCells] = useState<SymbolType[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState<SymbolType>(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState<number[] | undefined>(
    undefined
  );

  const onClickCellHandler = (numberCell: number) => {
    if (cells[numberCell] || winnerSequence) return;

    const cellsCopy = cells.slice();
    cellsCopy[numberCell] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinnerSequence(winner);
  };

  const resetGameHandler = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence?.[0]] : undefined;
  const isDraw = () => {
    for (let i = 0; i < cells.length; i++) {
      if (cells.every((el) => el !== null)) {
        return true;
      }
    }
    return false;
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    onClickCellHandler,
    resetGameHandler,
    winnerSymbol,
    isDraw,
  };
};
