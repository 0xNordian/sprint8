import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <div>
                Home
            </div>
            <button><NavLink to="starships">Starships</NavLink></button>
        </>
    )
}

export default Home