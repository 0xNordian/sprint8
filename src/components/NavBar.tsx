import { useState } from "react"

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="flex justify-center items-center">
            <div className="w-1/4"></div>
            <div className="w-1/2 grid place-content-center">
                <img src="/public/starwars-logo.png" width={100} height={100} alt="StarWars Logo" />
            </div>
            <div className="w-1/4">
                {isLoggedIn ? (
                    <p>Log out</p>
                ) : (
                    <div className="flex justify-center gap-4">
                        <div>Login</div>
                        <div>Sign Up</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar