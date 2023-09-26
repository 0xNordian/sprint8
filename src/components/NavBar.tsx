import Logger from './Logger'
import NavMenu from './NavMenu'

const NavBar = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-1/4"></div>
                <div className="grid w-1/2 place-content-center">
                    <img
                        src="/public/starwars-logo.png"
                        width={150}
                        height={150}
                        alt="StarWars Logo"
                    />
                </div>
                <Logger />
            </div>
            <NavMenu />
        </>
    )
}

export default NavBar
