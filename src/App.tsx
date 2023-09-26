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

function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="starships" element={<Starships />} />
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
