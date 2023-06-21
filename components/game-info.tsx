import * as React from "react";
import { GameSymbol } from "./game-symbol";
import { SymbolType } from "./game";

type PropsType = {
  isDraw: boolean;
  currentStep: SymbolType;
  winnerSequence: number[] | undefined;
  winnerSymbol: SymbolType | undefined;
};

export const GameInfo = ({
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
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2.5">
      Step: <GameSymbol symbol={currentStep} />
    </div>
  );
};
