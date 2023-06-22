import * as React from "react";
import { UiButton } from "../uikit/ui-button";
import { GameFieldLayout } from "./game-field-layout";
import { GameCurrentInfo } from "./game-current-info";
import { GameGrid } from "./game-grid";
import { GameCell } from "./game-cell";

type PropsType = {
  className: string;
};

const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }: PropsType) => {
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
    <GameFieldLayout className={className}>
      <GameCurrentInfo actions={actions} />
      <GameGrid>
        {cells.map((cell, i) => (
          <GameCell key={i}>{/*<CircleIcon className="w-5 h-5" />*/}</GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
