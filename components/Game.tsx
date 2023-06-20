import React from 'react';
import {GameInfo} from "./GameInfo";
import {useGameState} from "../common/hooks/useGameState";
import {GameCell} from "./GameCell";
import s from '../styles/Game.module.scss'

export type SymbolType = "X" | 'O' | null

export const Game = () => {
    const {
        cells,
        currentStep,
        winnerSequence,
        onClickCellHandler,
        resetGameHandler,
        winnerSymbol,
        isDraw
    } = useGameState()

    return (
        <div className={s.game}>
            <GameInfo isDraw={isDraw()}
                      currentStep={currentStep}
                      winnerSequence={winnerSequence}
                      winnerSymbol={winnerSymbol}
            />
            <div className={s.gameField}>
                {cells.map((el, index) => {
                    const isWinner = winnerSequence?.includes(index)
                    return (
                        <GameCell
                            key={index}
                            symbol={el}
                            onClick={() => onClickCellHandler(index)}
                            isWinner={isWinner}
                        />
                    )
                })}
            </div>
            <button onClick={resetGameHandler}>Reset</button>
        </div>
    );
};
