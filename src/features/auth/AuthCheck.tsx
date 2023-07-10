import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../services/auth/authentication';
function AuthCheck({ children }: { children: JSX.Element }) {
	const location = useLocation();
	const isLoggedIn = getIsLoggedIn();
	console.log('isLoggedIn', isLoggedIn);
	if (isLoggedIn) return children;
	return <Navigate to='/auth/signin' state={{ from: location }} replace />;
}
export default AuthCheck;
