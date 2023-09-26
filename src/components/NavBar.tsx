import Logger from "./Logger"
import NavMenu from "./NavMenu"

const NavBar = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-1/4"></div>
                <div className="w-1/2 grid place-content-center">
                    <img src="/public/starwars-logo.png" width={150} height={150} alt="StarWars Logo" />
                </div>
                <Logger />
            </div>
            <NavMenu />
        </>
    )
}

export default NavBar