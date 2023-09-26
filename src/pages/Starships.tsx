//? Components
import NavBar from '../components/NavBar'
import StarshipCards from '../components/StarshipCards'

const Starships = () => {
    return (
        <>
            <NavBar />
            <div className="mt-4">
                <StarshipCards />
            </div>
        </>
    )
}

export default Starships
