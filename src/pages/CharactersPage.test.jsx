import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useLoaderData: () => {
        return characters;
    },
}));

test('render CharactersPage component', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });

    expect(document.title).toBe('Marvel App');


    const h2Element = screen.getByRole('heading', { level: 2, name: "Marvel Characters" });
    expect(h2Element).toBeInTheDocument();

    const thorElement = screen.getByText(characters[0].name);
    expect(thorElement).toBeInTheDocument();

    const captainAmericaElement = screen.getByText(characters[1].name);
    expect(captainAmericaElement).toBeInTheDocument();

    const numberOfCharactersElement = screen.getByText(`There are ${characters.length} characters`);
    expect(numberOfCharactersElement).toBeInTheDocument();
});
