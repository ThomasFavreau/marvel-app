import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactUs';

describe('ContactPage', () => {
    test('renders Contact Us heading', () => {
        const { getByText } = render(<ContactPage />);

        screen.debug();
        const headingElement = screen.getByRole('heading', { level:2, name: "Contact Us" });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders contact email link', () => {
        const { getByText } = render(<ContactPage />);
        const emailLinkElement = getByText(/marvelApp@gmail.com/i);
        expect(emailLinkElement).toBeInTheDocument();
        expect(emailLinkElement).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
    });

    test('sets document title correctly', () => {
        render(<ContactPage />);
        expect(document.title).toBe('Contact Us | Marvel Characters');
    });
});