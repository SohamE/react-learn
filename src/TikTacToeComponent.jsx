import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";

const getActivePlayer  = (gameTurns) => {
    const lastPlayer = gameTurns[0];
    let currentPlayer = 'O';

    if (lastPlayer && lastPlayer.playerName == 'O') {
        currentPlayer = 'X';
    }
    return currentPlayer;
}

const TikTacToe = () => {
    // Lift state - as we are using it in children
    // const [playerSymbol, setPlayerSymbol] = useState("O");
    const [gameTurns, setGameTurn] = useState([]);

    const currentPlayer = getActivePlayer(gameTurns);

    const handleGameTurn = (rowIndex, colIndex) => {
        setGameTurn((prevGameTurns) => {
            const currentPlayer = getActivePlayer(prevGameTurns);

            let newGameTurns = [{ square: { rowIndex, colIndex }, playerName: currentPlayer }, ...prevGameTurns];
            return newGameTurns;
        })
        // setPlayerSymbol((oldPlayerSymbol) => oldPlayerSymbol === 'O' ? 'X' : 'O');
    }

    return (
        <>
            <h1>Tik-Tac-Toe</h1>
            <div id="game-container">
                <ol>
                    <li>
                        <Player name="Player 1" symbol="O" isActive={ currentPlayer == 'O' } />
                    </li>
                    <li>
                        <Player name="Player 2" symbol="X" isActive={ currentPlayer == 'X' } />
                    </li>
                </ol>
                <GameBoard setGameTurn={ handleGameTurn } gameTurns={ gameTurns } playerSymbol={currentPlayer} />
            </div>
            <Log gameTurns={gameTurns}/>
        </>
    );
}

export default TikTacToe;