import './App.css'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
    // useParams,
} from 'react-router-dom'

//? Pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Starships from './pages/Starships'
import StarshipDetails from './pages/StarshipDetails'

function App() {
    // const params = useParams<{ starshipdetails: string }>()
    // const starshipUrl = decodeURIComponent(params.starshipdetails)

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/starships" element={<Starships />} />
                <Route
                    path="/starships/:starshipdetails"
                    element={<StarshipDetails />}
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
