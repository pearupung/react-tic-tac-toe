import PropTypes from "prop-types";

const Board = () => {

    let gameTable = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    return (
        <table>
            <tr>
                {gameTable[0].map(cell => (
                    <td>{cell}</td>
                ))
                }
            </tr>
            <tr>
            {gameTable[1].map(cell => (
                    <td>{cell}</td>
                ))
                }
            </tr>
            <tr>
            {gameTable[2].map(cell => (
                    <td>{cell}</td>
                ))
                }
            </tr>
        </table>
    )
}

export default Board