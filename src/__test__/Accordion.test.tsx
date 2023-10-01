import Accordion from '../components/Accordion'
import { render, screen } from '@testing-library/react'

describe('Accordion', () => {
    test('should render', () => {
        render(<Accordion />)
        const accordion = screen.getByText(/hello world/i)
        expect(accordion).toBeDefined();
    })
})