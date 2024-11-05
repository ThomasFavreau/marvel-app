// CetteCette façon de faire fonctionne, mais elle n'est pas optimale. Elle mélange la récupération des données et l'affichage des composants.
// react_router nous permet de faire mieux en utilisant des hooks pour récupérer les données avant d'afficher le composant et ainsi de séparer récupération des données et affichage.
// Adapter le code pour utiliser react_router et les hooks comme dans l'exemple du guide, grâce aux concepts de loader et useLoaderData . On appelera directement la fonction getCharacters dans le loader (pas de fonction fetch ).

import React from 'react';
import {CharactersList} from '../components/CharactersList';
import {NumberOfCharacters} from '../components/NumberOfCharacters';
import { useLoaderData } from "react-router";

const CharactersPage = () => {
    document.title = 'Marvel App';

    const characters = useLoaderData();

    
    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage