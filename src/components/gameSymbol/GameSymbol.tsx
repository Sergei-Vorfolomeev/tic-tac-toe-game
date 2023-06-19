import React from 'react';
import s from "./GameSymbol.module.scss";
import {SYMBOL_X, SymbolType} from "app/App";

type PropsType = {
    symbol: SymbolType
}

export const GameSymbol = ({ symbol }: PropsType) => {
    return (
        <span className={`${s.symbol} + ${symbol === SYMBOL_X ? s.symbolX : s.symbolO}`}>{symbol}</span>
    );
};
