const Log = ({ gameTurns }) => {
    return (
        <ol>
            { gameTurns.map((turn, index) => (
                <li key={index}>{ turn.playerName } selected { turn.square.rowIndex }, { turn.square.colIndex }</li>
            )) }
        </ol>
    )
}

export default Log;