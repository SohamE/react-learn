import { useState } from "react";

const initilaGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ setActivePlayer, playerSymbol}) => {
    const [gameBoard, setGameBoard] = useState(initilaGameBoard);

    const handleClick = (row, column) => {
        setGameBoard((oldGameBoard) => {
            const newGameBoard = [...oldGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[row][column] = playerSymbol;
            return newGameBoard;
        });
        setActivePlayer();
    }

    return (
        <ol id="game-board" style={ { listStyle: "none" } }>
            { gameBoard.map((row, rowIndex) => (
                <li key={ rowIndex }>
                    <ol style={ { display: "flex", listStyle: "none" } }>
                        { row.map((playerSymbol, colIndex) => (
                            <li key={ colIndex }>
                                <button
                                    style={ { height: "50px", width: "50px", margin: "5px" } }
                                    onClick={ () => handleClick(rowIndex, colIndex) }
                                    disabled={ gameBoard[rowIndex][colIndex] !== null }
                                >
                                    { playerSymbol }
                                </button>
                            </li>
                        )) }
                    </ol>
                </li>
            ))
            }
        </ol>
    );
}

export default GameBoard;