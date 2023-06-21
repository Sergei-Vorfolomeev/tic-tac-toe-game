import * as React from "react";
import { GameInfo } from "./game-info";
import { useGameState } from "../common/hooks/useGameState";
import { GameCell } from "./game-cell";
import ResetButton from "./reset-button";

export type SymbolType = "X" | "O" | null;

export const Game = () => {
  const {
    cells,
    currentStep,
    winnerSequence,
    onClickCellHandler,
    resetGameHandler,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo
        isDraw={isDraw()}
        currentStep={currentStep}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
      />
      <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] pt-px pl-px mb-5">
        {cells.map((el, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <GameCell
              key={index}
              symbol={el}
              onClick={() => onClickCellHandler(index)}
              isWinner={isWinner}
            />
          );
        })}
      </div>
      <ResetButton onClick={resetGameHandler} />
    </div>
  );
};
