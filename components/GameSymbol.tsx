import React from 'react';
import s from "../styles/GameSymbol.module.scss";
import {SYMBOL_X} from "./constants";
import {SymbolType} from "./Game";


type PropsType = {
    symbol: SymbolType
}

export const GameSymbol = ({ symbol }: PropsType) => {
    return (
        <span className={`${s.symbol} + ${symbol === SYMBOL_X ? s.symbolX : s.symbolO}`}>{symbol}</span>
    );
};
