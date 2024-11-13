import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    test('renders About Us heading', () => {
        render(<AboutPage />);
        const headingElement = screen.getByText(/About Us/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders paragraph with team description', () => {
        render(<AboutPage />);
        const paragraphElement = screen.getByText(/We are a team of Marvel fans who love to create awesome apps !/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('sets document title to "About | Marvel App"', () => {
        render(<AboutPage />);
        expect(document.title).toBe("About | Marvel App");
    });
});