import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'
import { useNavigate } from 'react-router-dom'

const Logger = () => {
    const authStore = useAuthStore()
    const navigate = useNavigate()

    const logOutHandler = () => {
        navigate('/')
    }

    const resetLocalStorage = () => {
        authStore.setLoggedIn(false)
        authStore.setEmail('')
    }

    return (
        <div className="mt-2 w-full md:w-1/4">
            {authStore.isLoggedIn ? (
                <p onClick={() => {
                    logOutHandler()
                    resetLocalStorage()
                }}>Log out</p>
            ) : (
                <div className="flex w-full justify-center gap-4">
                    <div
                        onClick={resetLocalStorage}
                        className="flex justify-center"
                    >
                        <Link to="/signin">Sign in</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Logger
