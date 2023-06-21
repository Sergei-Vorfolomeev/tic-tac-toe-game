import * as React from 'react';
import {GameSymbol} from "./game-symbol";
import {SymbolType} from "./game";
import {clsx} from 'clsx'


type PropsType = {
    symbol: SymbolType
    onClick: () => void
    isWinner: boolean | undefined
}

export const GameCell = ({symbol, onClick, isWinner}: PropsType) => {
    return (
        <button
            className={clsx(
                'border border-gray-400 -mt-px -ml-px flex items-center justify-center',
                isWinner && 'bg-red-100'
            )}
            onClick={onClick}>
            {symbol ? <GameSymbol symbol={symbol}/> : null}
        </button>
    );
};
