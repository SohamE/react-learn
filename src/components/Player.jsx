import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleEdit = () => {
        // Recommended as setState func is async.
        setIsEditing((wasEditing) => {
            setIsEditing(!wasEditing);
        })
        // not recommended ->
        // setIsEditing(!isEditing) --- 1
        // if (isEditing) {         --- 2
        //     setIsEditing(false);
        // } else {
        //     setIsEditing(true);
        // }
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <span>
            {
                isEditing ? 
                <input onChange={handleChange} required value={playerName}/>
                :
                <span className="player-name">{ playerName }</span>
            }
            <button onClick={handleEdit}>
                { isEditing ? "Save" : "Edit"}
            </button>
            <span className="player-symbol">{ symbol }</span>
            <span hidden={!isActive}> - Currently Playing</span>
        </span>
    )
}

export default Player;