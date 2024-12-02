function CharacterDetail({ character = {} }) {
    if (!character || Object.keys(character).length === 0) {
        return <div>No character</div>;
    } else {
        const date = new Date(character.modified);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return (
            <div>
                <h2>{character.name}</h2>
                {
                    character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
                }
                <p>{character.description}</p>
                <p>{formattedDate}</p>
            </div>
        );
    }
}

export default CharacterDetail;