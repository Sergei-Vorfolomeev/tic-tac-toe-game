import React from 'react';
import s from "./GameInfo.module.scss";
import {SymbolType} from "app/App";
import {GameSymbol} from "components/gameSymbol/GameSymbol";

type PropsType = {
    isDraw: boolean
    currentStep: SymbolType
    winnerSequence: number[] | undefined
    winnerSymbol: SymbolType | undefined
}

export const GameInfo = ({isDraw, currentStep, winnerSequence, winnerSymbol}: PropsType) => {

    if (isDraw && !winnerSequence) {
        return (
            <div className={s.gameInfo}>
                Draw
            </div>
        )
    }

    if (winnerSymbol && winnerSequence) {
        return (
            <div className={s.gameInfo}>
                Winner: <GameSymbol symbol={winnerSymbol}/>
            </div>
        )
    }

    return (
        <div className={s.gameInfo}>
            Step: <GameSymbol symbol={currentStep} />
        </div>
    );
};
