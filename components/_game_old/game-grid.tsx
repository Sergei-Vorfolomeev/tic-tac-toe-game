import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const GameGrid = ({ children }: PropsType) => {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
};
