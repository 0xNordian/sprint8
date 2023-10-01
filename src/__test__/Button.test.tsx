import Button from '../components/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('should render msg', () => {
        render(<Button msg="hola"/>)
        const accordion = screen.getByText(/hola/i)
        expect(accordion).toBeDefined();
    })
})