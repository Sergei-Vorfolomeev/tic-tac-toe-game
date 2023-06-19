import React, {useState} from 'react';
import s from 'App.module.scss';

type SymbolType = "X" | 'O'
type CellsType = Array<null | SymbolType>

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

const computeWinner = (cells: CellsType) => {
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
    const [cells, setCells] = useState<CellsType>([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = useState<SymbolType>(SYMBOL_X)
    const [winnerSequence, setWinnerSequence] = useState<number[] | undefined>(undefined)

    const renderSymbol = (symbol: string) => (
        <span className={`${s.symbol} + ${symbol === SYMBOL_X ? s.symbolX : s.symbolO}`}>{symbol}</span>
    )
    const winnerSymbol = winnerSequence ? cells[winnerSequence?.[0]] : undefined

    const onClickCellHandler = (numberCell: number) => {
        if (cells[numberCell] || winnerSequence) return;

        const cellsCopy = cells.slice()
        cellsCopy[numberCell] = currentStep
        const winner = computeWinner(cellsCopy)

        setCells(cellsCopy)
        setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X)
        setWinnerSequence(winner)
    }

    const resetGameHandler = () => {
        setCells([null, null, null, null, null, null, null, null, null])
        setCurrentStep(SYMBOL_X)
        setWinnerSequence(undefined)
    }

    const isDraw = (cells: CellsType) => {
        for (let i = 0; i < cells.length; i++) {
            if (cells.every(el => el !== null)) {
                return true
            }
        }
        return false
    }

    return (
        <div className={s.game}>
            <div className={s.gameInfo}>
                {
                    isDraw(cells) && !winnerSequence
                    ? 'Draw'
                    : winnerSequence ? `Winner: ` : 'Step: '
                }
                {!isDraw(cells) && renderSymbol(winnerSymbol ?? currentStep)}
            </div>
            <div className={s.gameField}>
                {cells.map((el, index) => {
                    const isWinner = winnerSequence?.includes(index)
                    return (
                        <button
                            key={index}
                            className={`${s.cell} + ${isWinner ? s.cellWin : ''}`}
                            onClick={() => onClickCellHandler(index)}>
                            {el ? renderSymbol(el) : null}
                        </button>
                    )
                })}
            </div>
            <button onClick={resetGameHandler}>Reset</button>
        </div>
    );
}

export default App;
