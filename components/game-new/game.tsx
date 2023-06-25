import * as React from "react";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
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
      playersList={PLAYERS.map((player, index) => {
        return (
          <PlayerInfo
            key={player.id}
            player={player}
            isRight={index % 2 === 1}
            isTimerRunning={true}
            seconds={60}
          />
        );
      })}
    />
  );
}
