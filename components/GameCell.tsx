import React from 'react';
import s from "../styles/GameCell.module.scss";
import {GameSymbol} from "./GameSymbol";
import {SymbolType} from "./Game";


type PropsType = {
    symbol: SymbolType
    onClick: () => void
    isWinner: boolean | undefined
}

export const GameCell = ({symbol, onClick, isWinner}: PropsType) => {
    return (
        <button
            className={`${s.cell} + ${isWinner ? s.cellWin : ''}`}
            onClick={onClick}>
            {symbol ? <GameSymbol symbol={symbol}/> : null}
        </button>
    );
};
