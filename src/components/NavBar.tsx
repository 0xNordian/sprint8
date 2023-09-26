import { Link } from 'react-router-dom'
import Logger from './Logger'
import NavMenu from './NavMenu'

const NavBar = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="w-1/4"></div>
                <div className="grid w-1/2 place-content-center">
                    <Link to="/">
                        <img
                            src="/public/sw-logo.png"
                            width={150}
                            height={150}
                            alt="StarWars Logo"
                        />
                    </Link>
                </div>
                <Logger />
            </div>
            <NavMenu />
        </>
    )
}

export default NavBar
