import React from 'react';
import s from "../styles/GameInfo.module.scss";
import {GameSymbol} from "./GameSymbol";
import {SymbolType} from "./Game";


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
