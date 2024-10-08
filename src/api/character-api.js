import characters from '../data/characters.json';

///create a function to retrieve characters
export const getCharacters = () => {
    return characters
}

/**
 * Get a character by id
 * @param {number} id
 * @returns {object} character
 */

export const getCharactersById = (id) => {
    const character = characters.find(character => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character
}