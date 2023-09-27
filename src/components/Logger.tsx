import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'

const Logger = () => {
    const authStore = useAuthStore()

    const logOutHandler = () => {
        authStore.setLoggedIn(false)
        authStore.setEmail('')
    }
    return (
        <div className="mt-2 w-full md:w-1/4">
            {authStore.isLoggedIn ? (
                <p onClick={logOutHandler}>Log out</p>
            ) : (
                <div className="flex justify-center gap-4">
                    {/* <div onClick={logInHandler}>Login</div> */}
                    <div onClick={logOutHandler}>
                        <Link to="/signin">Sign in</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Logger
