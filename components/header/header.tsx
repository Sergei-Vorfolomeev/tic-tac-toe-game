import * as React from "react";
import Image from "next/image";
import { Profile } from "../profile";
import { ArrowDownIcon } from "../game/icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

const logo = require("./logo.svg") as string;

export const Header = () => {
  return (
    <header className="flex items-center bg-white h-24 px-8 shadow-lg">
      <Image src={logo} alt={"logo"} />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className={"w-44"} size={"lg"} variant={"primary"}>
        Play
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
