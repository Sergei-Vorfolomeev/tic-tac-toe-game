import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  backlink: ReactNode;
  gameTitle: ReactNode;
  gameInfo: ReactNode;
  playersList: ReactNode;
  gameMoveInfo: ReactNode;
  actions: ReactNode;
  gameCells: ReactNode;
};

export function GameLayout({
  backlink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}: PropsType) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backlink}
        {gameTitle}
        {gameInfo}
      </div>
      <div className="bg-white mt-4 shadow-md rounded-2xl px-8 py-4 grid grid-cols-2 gap-3">
        {playersList}
      </div>
      <div className="mt-6 bg-white shadow-md rounded-2xl px-8 pt-5 pb-7">
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
