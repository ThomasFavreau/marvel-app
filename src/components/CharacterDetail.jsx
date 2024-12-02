import { formatDate } from '../fonctions/fonction_date';

function CharacterDetail({ character = {} }) {
    if (!character || Object.keys(character).length === 0) {
        return <div>No character</div>;
    } else {
        return (
            <div>
                <h2>{character.name}</h2>
                {
                    character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
                }
                <p>{character.description}</p>
                <p>{formatDate(character.modified)}</p>
            </div>
        );
    }
}

export default CharacterDetail;