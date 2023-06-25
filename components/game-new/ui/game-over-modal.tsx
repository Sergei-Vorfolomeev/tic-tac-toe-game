import * as React from "react";
import { ReactNode } from "react";
import { UiModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-button";
import { SymbolType } from "../constants";

type PropsType = {
  winnerName: string;
  winnerSymbol: SymbolType;
  players: ReactNode;
};

export function GameOverModal({
  winnerName,
  winnerSymbol,
  players,
}: PropsType) {
  return (
    <UiModal
      width={"md"}
      isOpen={!!winnerName}
      onClose={() => console.log("Close modal!")}
    >
      <UiModal.Header className={""}>Game Over!</UiModal.Header>
      <UiModal.Body className={"px-6"}>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">{players}</div>
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
  );
}
