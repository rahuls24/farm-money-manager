import './App.css';
import AuthCheck from './features/auth/AuthCheck';
import Signin from './features/auth/pages/Signin';

function App() {
	return (
		<>
			{/* <Header /> */}
			<AuthCheck>
				<Signin />
			</AuthCheck>
		</>
	);
}

export default App;
