import React, {useState} from 'react';
import s from 'app/App.module.scss';
import {GameInfo} from "components/gameInfo/GameInfo";
import {GameCell} from "components/gameCell/GameCell";
import {useGameState} from "common/hooks/useGameState";

export type SymbolType = "X" | 'O' | null

export const SYMBOL_X = 'X'
export const SYMBOL_O = 'O'

export const computeWinner = (cells: SymbolType[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return [a, b, c]
        }

    }
}

function App() {
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
}

export default App;
