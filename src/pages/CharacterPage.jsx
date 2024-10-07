import React from 'react';
import characters from '../data/characters.json';
import CharactersList from '../components/CharactersList';
import NumberOfCharacters from '../components/NumberOfCharacters';

function CharacterPage() {
    document.title = "Character List | Marvel Characters"
    return ( 
        <>
            <h1>Marvel Characters</h1>
            <CharactersList characters={characters} />
            <NumberOfCharacters characters={characters} />
        </>  
    );
}

export default CharacterPage;
