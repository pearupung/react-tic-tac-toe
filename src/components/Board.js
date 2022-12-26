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
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </table>
    )
}

export default Board