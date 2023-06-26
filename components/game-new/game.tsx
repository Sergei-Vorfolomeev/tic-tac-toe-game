import * as React from "react";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS, SymbolType } from "./constants";
import { PlayerInfo, PlayerType } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { UiButton } from "../uikit/ui-button";
import { GAME_STATE_ACTIONS, useGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import {
  cellClickAction,
  gameStateReducer,
  GameStateType,
  initGameState,
} from "./model/game-state-reducer";
import { useReducer } from "react";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";

const PLAYERS_COUNT: number = 2;

export function Game() {
  const [gameState, dispatch] = useReducer<GameStateType>(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState
  );

  const nextMove: SymbolType = getNextMove(
    gameState.currentMove,
    PLAYERS_COUNT
  );

  const winnerSequence: number[] = computeWinner(gameState);
  const winnerSymbol: SymbolType = computeWinnerSymbol(
    gameState,
    nextMove,
    winnerSequence
  );
  const winnerPlayer: PlayerType = PLAYERS.find(
    (player) => player.symbol === winnerSymbol
  );

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
              isTimerRunning={
                gameState.currentMove === player.symbol && !winnerSymbol
              }
              seconds={60}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        actions={actions}
        gameCells={gameState.cells.map((cell, index) => {
          return (
            <GameCell
              key={index}
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => dispatch(cellClickAction(index))}
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
