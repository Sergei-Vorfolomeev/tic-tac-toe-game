import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { useState } from "react";
import { useGameState } from "../components/game/hooks/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";
import { log } from "util";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    onCellClickHandler,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className={"mt-4"}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="flex justify-center items-center gap-2 mt-4">
            Winner: <GameSymbol symbol={winnerSymbol} className="w-5 h-5" />
          </div>
        )}
        <UiModal
          width={"md"}
          isOpen={!!winnerSymbol}
          onClose={() => console.log("Close modal!")}
        >
          <UiModal.Header className={""}>Game Over!</UiModal.Header>
          <UiModal.Body className={"px-6"}>
            <div className="text-sm">
              Winner: <span className="text-teal-600">SergeyV</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer className={"mt-auto p-6 flex gap-4 justify-end"}>
            <UiButton size={"md"} variant={"outline"}>
              Back
            </UiButton>
            <UiButton size={"md"} variant={"primary"}>
              Play again
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          playersCount={playersCount}
          className={"mt-6"}
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          onCellClickHandler={onCellClickHandler}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
