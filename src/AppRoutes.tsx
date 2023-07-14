import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AuthCheck from './features/auth/AuthCheck';
import ResetPassword from './features/auth/pages/ResetPassword';
import Signin from './features/auth/pages/Signin';
import Signup from './features/auth/pages/Signup';
import Dashboard from './features/dashboard/Dashboard';
function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<AuthCheck>
							<Layout />
						</AuthCheck>
					}
				>
					<Route
						index
						element={
							<AuthCheck>
								<Dashboard />
							</AuthCheck>
						}
					/>
					<Route path='history' element={<>History</>} />
				</Route>
				<Route path='/auth'>
					<Route index element={<Signin />} />
					<Route path='signin' element={<Signin />} />
					<Route path='signup' element={<Signup />} />
					<Route path='reset-password' element={<ResetPassword />} />
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
