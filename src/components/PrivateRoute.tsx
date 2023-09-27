import { ReactElement } from 'react'
import { Route, Navigate, RouteProps } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore'

type PrivateRouteTypes = {
    path: string,
    element: ReactElement
} & RouteProps;

const PrivateRoute = ({ element, ...rest }: PrivateRouteTypes) => {
    const { isLoggedIn } = useAuthStore()

    // If the user is logged in, render the protected route. Otherwise, redirect to the signin page.
    return isLoggedIn ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/signin" />
    )
}

export default PrivateRoute
