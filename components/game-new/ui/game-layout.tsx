import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  backlink: ReactNode;
  gameTitle: ReactNode;
  gameInfo: ReactNode;
  playersList: ReactNode;
};

export function GameLayout({
  backlink,
  gameTitle,
  gameInfo,
  playersList,
}: PropsType) {
  return (
    <div>
      <div className="pl-2">
        {backlink}
        {gameTitle}
        {gameInfo}
      </div>
      <div className="bg-white mt-4 shadow-md rounded-2xl px-8 py-4 grid grid-cols-2 gap-3">
        {playersList}
      </div>
    </div>
  );
}
