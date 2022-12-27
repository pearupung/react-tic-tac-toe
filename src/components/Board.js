import PropTypes from "prop-types";
import { useState } from "react";

const Board = () => {

    let playerOneSymbol = '❌'
    let playerTwoSymbol = '⭕'
    let boardSize = 2

    const [board, setBoardState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])

    const [player, setPlayerState] = useState(playerOneSymbol)

    const selectCell = (row, col) => {
        console.log(`Row: ${row}, Col: ${col}`)
        if (row > boardSize || col > boardSize || board[row][col] !== '') {
            return
        }

        const newBoard = board
        newBoard[row][col] = player
        setBoardState(newBoard)
        // switch players
        if (player === playerOneSymbol) {
            setPlayerState(playerTwoSymbol)
        }
        else {
            setPlayerState(playerOneSymbol)
        }
    }

    return (
        <div className="game-board">
        {board.map((row, rindex) => {
        return row.map((cell, cindex) => (
            <div onClick={() => {selectCell(rindex, cindex)}} key={rindex + cindex} className="box">
                {cell}
            </div>
        ))
        })}
        </div>
    )
}

export default Board