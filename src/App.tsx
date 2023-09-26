import './App.css'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

//? Pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Starships from './pages/Starships'
import StarshipDetails from './pages/StarshipDetails'
import getStarShipDetails from './pages/StarshipDetails'

function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/starships" element={<Starships />} />
                <Route
                    path="/starships/:starshipdetails"
                    element={<StarshipDetails />}
                    loader={getStarShipDetails}
                />
            </Route>,
        ),
    )

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
