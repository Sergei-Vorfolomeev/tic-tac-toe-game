import * as React from "react";
import { UiModal } from "../../uikit/ui-modal";
import { GameSymbol } from "../../game/game-symbol";
import { UiButton } from "../../uikit/ui-button";

export function GameOverModal() {
  return (
    <UiModal
      width={"md"}
      isOpen={!!winnerSymbol}
      onClose={() => console.log("Close modal!")}
    >
      <UiModal.Header className={""}>Game Over!</UiModal.Header>
      <UiModal.Body className={"px-6"}>
        <div className="text-sm">
          Winner:{" "}
          <span className="text-teal-600">
            SergeyV
            <GameSymbol symbol={winnerSymbol} className="w-5 h-5" />
          </span>
        </div>
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
