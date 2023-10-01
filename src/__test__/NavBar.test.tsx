import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'

describe('NavBar', () => {
    test('does not render Logger component when showLogger is false', () => {
        render(
            <BrowserRouter>
                <NavBar showLogger={false} showNavMenu={false} />
            </BrowserRouter>,
        )

        expect(screen.queryByText('Log out')).toBeNull()
    })
})
