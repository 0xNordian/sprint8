// import { Route, useNavigate } from 'react-router-dom';

// type ProtectedRouteProps = {
//     path: string;
//     element: React.ReactElement;
//     children?: React.ReactNode;
// };

// function ProtectedRoute({ children, ...rest }: ProtectedRouteProps) {
//     const isLoggedIn = localStorage.getItem('loggedIn') === 'true' || false;
//     const navigate = useNavigate();

//     if (!isLoggedIn) {
//         navigate('/');
//         return null;
//     }

//     return <Route {...rest}>{children}</Route>;
// }

// export default ProtectedRoute;
