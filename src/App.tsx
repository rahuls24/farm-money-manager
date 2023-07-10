import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRoutes from './AppRoutes';
import { getLoggedInUser } from './services/auth/authentication';
interface AuthContextProps {
	isLoggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
	isLoggedIn: false,
	setLoggedIn: () => {},
});

function App() {
	const [firebaseInitialized, setFirebaseInitialized] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
	useEffect(() => {
		getLoggedInUser()
			.then(val => {
				if (val === null) {
					setFirebaseInitialized(true);
					setLoggedIn(false);
					return;
				}
				setFirebaseInitialized(true);
				setLoggedIn(true);
			})
			.catch(() => {})
			.finally(() => {
				setFirebaseInitialized(true);
			});
	}, []);
	if (!firebaseInitialized) return <h1>Loading....</h1>;
	return (
		<>
			<AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
				<AppRoutes />
				<Main />
			</AuthContext.Provider>
		</>
	);
}

export default App;

function Main() {
	return (
		<>
			<ToastContainer
				position='bottom-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
		</>
	);
}
