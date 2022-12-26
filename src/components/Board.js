import PropTypes from "prop-types";

const Board = () => {

    let gameTable = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    return (
        <table>
            {gameTable.map(row => (
                <tr>
                    {row.map(cell => (
                    <td>{cell}</td>
                ))
                }
                </tr>
            ))}
        </table>
    )
}

export default Board