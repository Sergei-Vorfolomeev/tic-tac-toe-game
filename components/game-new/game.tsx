import * as React from "react";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS, SymbolType } from "./constants";
import { PlayerInfo, PlayerType } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { UiButton } from "../uikit/ui-button";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import {
  cellClickAction,
  gameReducer,
  GameStateType,
  initGameState,
  tickAction,
} from "./model/game-reducer";
import { useCallback, useMemo, useReducer } from "react";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../libs/timers";

const PLAYERS_COUNT: number = 2;

export function Game() {
  const [gameState, dispatch] = useReducer<() => GameStateType>(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState
  );

  const { cells, currentMove, currentMoveStart } = gameState;

  const nextMove: SymbolType = getNextMove(gameState);

  const winnerSequence: number[] = useMemo(
    () => computeWinner(gameState),
    [gameState]
  );
  const winnerSymbol: SymbolType = computeWinnerSymbol(
    gameState,
    nextMove,
    winnerSequence
  );
  const winnerPlayer: PlayerType = PLAYERS.find(
    (player) => player.symbol === winnerSymbol
  );

  useInterval(
    1000,
    currentMoveStart && !winnerSymbol,
    useCallback(() => {
      dispatch(tickAction());
    }, [])
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

  const handleCellClick = useCallback((index: number) => {
    dispatch(cellClickAction(index));
  }, []);

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
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
            winnerSymbol
          );
          return (
            <PlayerInfo
              key={player.id}
              player={player}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
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
              index={index}
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={handleCellClick}
              symbol={cell}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
            winnerSymbol
          );
          return (
            <PlayerInfo
              key={player.id}
              player={player}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
      />
    </>
  );
}
