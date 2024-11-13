import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import { useLoaderData } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
}));

describe('CharacterDetailPage', () => {
    it('renders character name and details', () => {
        const mockCharacter = {
            name: 'Spider-Man',
            description: 'Friendly neighborhood Spider-Man',
        };
        useLoaderData.mockReturnValue(mockCharacter);

        const { getByText } = render(
            <MemoryRouter>
                <CharacterDetailPage />
            </MemoryRouter>
        );

        expect(getByText('Spider-Man')).toBeInTheDocument();
        expect(getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument();
    });
});