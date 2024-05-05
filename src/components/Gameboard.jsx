import { useState } from "react";

const initilaGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ setGameTurn, gameTurns, playerSymbol }) => {
    let gameBoard = initilaGameBoard;
    for (let i = gameTurns.length-1; i >= 0; i--) {
        const { square, playerName } = gameTurns[i];
        const { rowIndex, colIndex } = square;

        gameBoard[rowIndex][colIndex] = playerName;
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
                                    onClick={ () => setGameTurn(rowIndex, colIndex) }
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