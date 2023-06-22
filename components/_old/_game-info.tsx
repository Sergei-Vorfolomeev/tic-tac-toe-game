import * as React from "react";
import { _gameSymbol } from "./_game-symbol";
import { SymbolType } from "./_game";

type PropsType = {
  isDraw: boolean;
  currentStep: SymbolType;
  winnerSequence: number[] | undefined;
  winnerSymbol: SymbolType | undefined;
};

export const _gameInfo = ({
  isDraw,
  currentStep,
  winnerSequence,
  winnerSymbol,
}: PropsType) => {
  if (isDraw && !winnerSequence) {
    return <div className="mb-2.5">Draw</div>;
  }

  if (winnerSymbol && winnerSequence) {
    return (
      <div className="mb-2.5">
        Winner: <_gameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2.5">
      Step: <_gameSymbol symbol={currentStep} />
    </div>
  );
};
