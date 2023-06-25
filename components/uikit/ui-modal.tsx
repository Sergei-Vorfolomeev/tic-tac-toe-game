import * as React from "react";
import { clsx } from "clsx";
import { MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { CrossLightIcon } from "../game-new/ui/icons/cross-light-icon";

type PropsType = {
  width: "md" | "full";
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const UiModal = ({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}: PropsType) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const inModal = (e.target as Element).closest("[data-id=modal]");
    console.log(inModal);
    if (inModal) return;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur py-10 overflow-y-auto",
        className
      )}
      onClick={handleClick}
    >
      {" "}
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width]
        )}
      >
        {children}
        <button
          className="
            absolute top-0 left-[calc(100%+12px)]
            w-8 h-8 flex items-center justify-center
            bg-white/10 rounded hover:bg-white/40
            transition-colors"
          onClick={onClose}
        >
          <CrossLightIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modals"));
};

UiModal.Header = function UiModelHeader({ className, children }) {
  return (
    <div className={clsx("px-6 pt-6 pb-4 txt-2xl", className)}>{children}</div>
  );
};

UiModal.Body = function UiModelBody({ className, children }) {
  return <div className={clsx("", className)}>{children}</div>;
};

UiModal.Footer = function UiModelFooter({ className, children }) {
  return <div className={clsx("", className)}>{children}</div>;
};
