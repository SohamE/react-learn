import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";

const TikTacToe = () => {
    // Lift state - as we are using it in children
    const [playerSymbol, setPlayerSymbol] = useState("O");
    const [gameTurns, setGameTurn] = useState([]);

    const handleGameTurn = (rowIndex, colIndex) => {
        setGameTurn((prevGameTurns) => {
            const lastPlayer = prevGameTurns[0];
            let currentPlayer = 'O';

            if (lastPlayer && lastPlayer.playerName == 'O') {
                currentPlayer = 'X';
            }

            let newGameTurns = [{ square: { rowIndex, colIndex }, playerName: currentPlayer }, ...prevGameTurns];
            return newGameTurns;
        })
        setPlayerSymbol((oldPlayerSymbol) => oldPlayerSymbol === 'O' ? 'X' : 'O');
    }

    return (
        <>
            <h1>Tik-Tac-Toe</h1>
            <div id="game-container">
                <ol>
                    <li>
                        <Player name="Player 1" symbol="O" isActive={ playerSymbol == 'O' } />
                    </li>
                    <li>
                        <Player name="Player 2" symbol="X" isActive={ playerSymbol == 'X' } />
                    </li>
                </ol>
                <GameBoard setGameTurn={ handleGameTurn } gameTurns={ gameTurns } playerSymbol={playerSymbol} />
            </div>
            <Log gameTurns={gameTurns}/>
        </>
    );
}

export default TikTacToe;