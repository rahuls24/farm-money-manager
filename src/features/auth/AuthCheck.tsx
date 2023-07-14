import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../App';
function AuthCheck({ children }: { children: JSX.Element }) {
	const location = useLocation();
	const { isLoggedIn } = useContext(AuthContext);
	if (isLoggedIn) return children;
	return <Navigate to='/auth/signin' state={{ from: location }} replace />;
}
export default AuthCheck;
