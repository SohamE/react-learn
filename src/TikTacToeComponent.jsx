import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";

const TikTacToe = () => {
    // Lift state - as we are using it in children
    const [playerSymbol, setPlayerSymbol] = useState("O");

    const handleActivePlayer = () => {
        setPlayerSymbol((oldPlayerSymbol) => oldPlayerSymbol === 'O' ? 'X' : 'O');
    }

    return (
        <>
        <h1>Tik-Tac-Toe</h1>
        <div id="game-container">
            <ol>
                <li>
                    <Player name="Player 1" symbol="O" isActive={ playerSymbol == 'O' }/>
                </li>
                <li>
                    <Player name="Player 2" symbol="X" isActive={ playerSymbol == 'X' }/>
                </li>
            </ol>
            <GameBoard setActivePlayer={handleActivePlayer} playerSymbol={playerSymbol}/>
        </div>

        </>
    );
}

export default TikTacToe;