import {
	getCurrentSigninUser,
	signOutTheUser,
} from '../../services/auth/authentication';

function Dashboard() {
	return (
		<>
			<h1
				onClick={() => {
					const currentUser = getCurrentSigninUser();
					console.log({ currentUser });
				}}
			>
				Home page
			</h1>
			<button
				onClick={async () => {
					await signOutTheUser();
				}}
			>
				Logout
			</button>
		</>
	);
}

export default Dashboard;
