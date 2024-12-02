import { Link } from "react-router-dom";

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => {
        const date = new Date(character.modified);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        
        return (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
            <strong>{character.name}</strong> - <small>{formattedDate}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
