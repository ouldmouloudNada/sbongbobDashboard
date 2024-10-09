
import React, { useState } from 'react';

const CharacterCard = ({ character, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCharacter, setEditedCharacter] = useState(character);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedCharacter({ ...editedCharacter, [name]: value });
    };

    const handleSave = () => {
        
        setIsEditing(false);
    };

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} onClick={() => setIsEditing(true)} />
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedCharacter.name}
                        onChange={handleEditChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedCharacter.description}
                        onChange={handleEditChange}
                    />
                    <input
                        type="text"
                        name="image"
                        value={editedCharacter.image}
                        onChange={handleEditChange}
                    />
                    <button onClick={handleSave}>Save Changes</button>
                </div>
            ) : (
                <div onClick={() => setIsEditing(true)}>
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                    <button className="btn "onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default CharacterCard;
