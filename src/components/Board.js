import PropTypes from "prop-types";

const Board = () => {

    let playerOneSymbol = '❌'
    let playerTwoSymbol = '⭕'

    let gameTable = [
        ['❌', '⭕', '⭕'],
        ['❌', '⭕', '⭕'],
        ['❌', '⭕', '⭕'],
    ]

    return (
        <div className="game-board">
        {gameTable.map((row, rindex) => {
        return row.map((cell, cindex) => (
            <div key={rindex + cindex} className="box">
                {cell}
            </div>
        ))
        })}
        </div>
    )
}

export default Board