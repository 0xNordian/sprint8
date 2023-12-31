import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'

const NavMenu = () => {
    const authStore = useAuthStore()
    
    return (
        <div className="nav-menu mt-4 flex items-center justify-center border-b-[1px] border-slate-700">
            {authStore.isLoggedIn && (
                <>
                    <div className="grid h-10 w-1/2 place-items-center sm:w-1/4">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="grid h-10 w-1/2 place-items-center sm:w-1/4">
                        <Link to="/starships">Starships</Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default NavMenu
