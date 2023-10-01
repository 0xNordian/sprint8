import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logger from '../components/Logger';


// Mock the useAuthStore to provide a specific value for isLoggedIn
jest.mock('../stores/useAuthStore.ts', () => ({
    useAuthStore: jest.fn(() => ({
        isLoggedIn: true,
        setLoggedIn: jest.fn(),
        setEmail: jest.fn(),
    })),
}));

describe('Logger', () => {
    test('should render "Log out" when isLoggedIn is true', () => {
        render(
            <BrowserRouter>
                <Logger />
            </BrowserRouter>
        );

        const logoutButton = screen.getByText('Log out');
        expect(logoutButton).toBeDefined();
    });

    test('should render "Sign in" when isLoggedIn is false', () => {
        // Mock useAuthStore to return isLoggedIn as false
        jest.spyOn(
            require('../stores/useAuthStore'),
            'useAuthStore'
        ).mockReturnValue({
            isLoggedIn: false,
            setLoggedIn: jest.fn(),
            setEmail: jest.fn(),
        });

        render(
            <BrowserRouter>
                <Logger />
            </BrowserRouter>
        );

        const signInLink = screen.getByText('Sign in');
        expect(signInLink).toBeDefined();
    });

    test('should call logOutHandler and resetLocalStorage when "Log out" is clicked', () => {
        const setLoggedIn = jest.fn();
        const setEmail = jest.fn();

        jest.spyOn(
            require('../stores/useAuthStore'),
            'useAuthStore'
        ).mockReturnValue({ isLoggedIn: true, setLoggedIn, setEmail });

        render(
            <BrowserRouter>
                <Logger />
            </BrowserRouter>
        );

        const logoutButton = screen.getByText('Log out');
        fireEvent.click(logoutButton);

        expect(setLoggedIn).toHaveBeenCalledWith(false);
        expect(setEmail).toHaveBeenCalledWith('');
    });
});