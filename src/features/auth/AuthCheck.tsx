import { getIsLoggedIn } from '../../services/auth/authentication';
function AuthCheck({ children }: { children: JSX.Element }) {
	const isLoggedIn = getIsLoggedIn();
	console.log('isLoggedIn', isLoggedIn);
	if (isLoggedIn) return children;
}
export default AuthCheck;
