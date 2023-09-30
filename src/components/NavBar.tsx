import { Link } from 'react-router-dom'
import Logger from './Logger'
import NavMenu from './NavMenu'

type NavMenuProps = {
    showLogger: boolean
    showNavMenu: boolean
}

const NavBar = ({ showLogger, showNavMenu }: NavMenuProps) => {
    return (
        <>
            <div className="navbar flex flex-col items-center justify-center md:flex-row">
                <div className="w-1/4"></div>
                <div className="grid w-1/2 place-content-center">
                    <Link to="/">
                        <img
                            src="starwars-logo.png"
                            width={150}
                            height={150}
                            alt="StarWars Logo"
                        />
                    </Link>
                </div>
                {showLogger && <Logger />}
            </div>
            {showNavMenu && <NavMenu />}
        </>
    )
}

export default NavBar
