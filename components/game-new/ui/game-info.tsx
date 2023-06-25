import * as React from "react";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

type PropsType = {
  isRatingGame: boolean;
  playersCount: number;
  timeMode: string;
};

export function GameInfo({ isRatingGame, playersCount, timeMode }: PropsType) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon /> {timeMode}
      </div>
    </div>
  );
}
