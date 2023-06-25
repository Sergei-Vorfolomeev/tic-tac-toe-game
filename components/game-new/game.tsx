import * as React from "react";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS } from "./constants";
import { PlayerInfo, PlayerType } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { UiButton } from "../uikit/ui-button";
import { useGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";

const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    winnerSymbol,
    winnerSequence,
    onCellClickHandler,
    handlePlayerTimeOver,
  } = useGameState(PLAYERS_COUNT);

  const actions = (
    <>
      <UiButton className={""} size={"md"} variant={"primary"}>
        Draw
      </UiButton>
      <UiButton className={""} size={"md"} variant={"outline"}>
        Give up
      </UiButton>
    </>
  );

  const winnerPlayer: PlayerType = PLAYERS.find(
    (player) => player.symbol === winnerSymbol
  );

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        gameTitle={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame={true}
            playersCount={4}
            timeMode={"1 min per move"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          return (
            <PlayerInfo
              key={player.id}
              player={player}
              isRight={index % 2 === 1}
              isTimerRunning={currentMove === player.symbol && !winnerSymbol}
              seconds={60}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        actions={actions}
        gameCells={cells.map((cell, index) => {
          return (
            <GameCell
              key={index}
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => onCellClickHandler(index)}
              symbol={cell}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        winnerSymbol={winnerSymbol}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            player={player}
            isRight={index % 2 === 1}
            isTimerRunning={false}
            seconds={60}
          />
        ))}
      />
    </>
  );
}
