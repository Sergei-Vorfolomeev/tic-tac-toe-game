import * as React from 'react';
import {SYMBOL_X} from "./constants";
import {SymbolType} from "./game";
import {clsx} from "clsx";


type PropsType = {
    symbol: SymbolType
}

export const GameSymbol = ({ symbol }: PropsType) => {
    return (
        <span className={clsx(
            'text-xl font-semibold leading-6',
            symbol === SYMBOL_X ? 'text-rose-600' : 'text-green-600'
        )}>
            {symbol}
        </span>
    );
};


