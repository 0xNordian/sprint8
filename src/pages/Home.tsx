import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                Home
            </div>
            <button><NavLink to="starships">Starships</NavLink></button>
        </>
    )
}

export default Home