import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { useState } from "react";
import { useGameState } from "../components/game/hooks/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    onCellClickHandler,
    winnerSequence,
    playersTimeOver,
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
