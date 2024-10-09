// src/components/CharacterDashboard.js
import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

const CharacterDashboard = () => {
    const [characters, setCharacters] = useState([
        { 
          id: 1, 
          name: 'SpongeBob SquarePants', 
          description: 'A cheerful and optimistic sea sponge.', 
          image: 'images/SpongeBob_SquarePants_character.svg',
        },
        { 
          id: 2, 
          name: 'Patrick Star', 
          description: 'SpongeBob\'s best friend and a starfish.', 
          image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg',
        },
        { 
          id: 3, 
          name: 'Squidward Tentacles', 
          description: 'A cynical and sarcastic squid who works at the Krusty Krab.', 
          image: 'images/Squidward_stock_art.webp',
        },
        { 
          id: 4, 
          name: 'Mr. Krabs', 
          description: 'The greedy owner of the Krusty Krab.', 
          image: 'images/Mr._Krabs_in_2018.webp',
        },
        { 
          id: 5, 
          name: 'Sandy Cheeks', 
          description: 'A squirrel who lives underwater in a suit and is friends with SpongeBob.', 
          image: 'images/Sandy_stock_art.webp',
        },
        { 
          id: 6, 
          name: 'Plankton', 
          description: 'The main antagonist who tries to steal the Krabby Patty secret formula.', 
          image: 'images/Bob_l3Fponge_Plankton.webp',
        }
      ]);
      
      


    const handleDelete = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    };

    return (
        <div className="dashboard">
            {characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    character={character}
                    onDelete={() => handleDelete(character.id)}
                />
            ))}
        </div>
    );
};

export default CharacterDashboard;
