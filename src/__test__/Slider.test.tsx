import { render, screen } from '@testing-library/react'
import Slider from '../components/Slider'

describe('Slider', () => {
    test('should render', () => {
        render(<Slider />)
        const slider = screen.getByText(/Hera must answer to the New Republic, while far, far away, a reunion takes place./i)
        expect(slider).toBeDefined();
    })
})