import './App.css'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
    Navigate,
} from 'react-router-dom'

//? Pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Starships from './pages/Starships'
import StarshipDetails from './pages/StarshipDetails'
import SignIn from './pages/SignIn'
import { useEffect } from 'react'
import { useAuthStore } from './stores/useAuthStore'
import NotFoundPage from './pages/NotFoundPage'

//? Components
import usePageVisibility from './hooks/usePageVisibility'

function App() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true' || false
    const authStore = useAuthStore()

    useEffect(() => {
        console.log("User isLoggedIn: ", isLoggedIn)
    }, [authStore.isLoggedIn])

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="/starships"
                    element={isLoggedIn ? <Starships /> : <Navigate to="/" />}
                />
                <Route
                    path="/starships/:starshipdetails"
                    element={
                        isLoggedIn ? <StarshipDetails /> : <Navigate to="/" />
                    }
                />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>,
        ),
    )

    usePageVisibility();

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
