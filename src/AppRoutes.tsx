import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthCheck from './features/auth/AuthCheck';
import Signin from './features/auth/pages/Signin';
function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<AuthCheck>
							<>Home Page</>
						</AuthCheck>
					}
				></Route>
				<Route path='/auth'>
					<Route index element={<Signin />} />
					<Route path='signin' element={<Signin />} />
					<Route path='signup' element={<Signin />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;

const NotFound: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
			<p className='text-gray-600'>
				The page you are looking for does not exist.
			</p>
		</div>
	);
};
