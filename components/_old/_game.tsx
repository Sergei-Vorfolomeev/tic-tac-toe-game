import * as React from "react";
import { _gameInfo } from "./_game-info";
import { useGameState } from "../../common/hooks/useGameState";
import { _gameCell } from "./_game-cell";
import _resetButton from "./_reset-button";

export const _game = () => {
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
      <_gameInfo
        isDraw={isDraw()}
        currentStep={currentStep}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
      />
      <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] pt-px pl-px mb-5">
        {cells.map((el, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <_gameCell
              key={index}
              symbol={el}
              onClick={() => onClickCellHandler(index)}
              isWinner={isWinner}
            />
          );
        })}
      </div>
      <_resetButton onClick={resetGameHandler} />
    </div>
  );
};
