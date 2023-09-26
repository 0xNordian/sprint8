import { useState } from 'react'

const Logger = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logInHandler = () => {
        setIsLoggedIn(prev => !prev)
    }
    return (
        <div className="w-1/4">
            {isLoggedIn ? (
                <p onClick={logInHandler}>Log out</p>
            ) : (
                <div className="flex justify-center gap-4">
                    <div onClick={logInHandler}>Login</div>
                    <div>Sign Up</div>
                </div>
            )}
        </div>
    )
}

export default Logger