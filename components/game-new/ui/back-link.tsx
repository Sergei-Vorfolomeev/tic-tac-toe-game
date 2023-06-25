import * as React from "react";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-xs text-teal-600 -mb-0.5"
    >
      <ArrowLeftIcon />
      To main
    </Link>
  );
}
