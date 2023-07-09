import { app } from '../../firebaseConfig';

import { getAuth } from 'firebase/auth';
export function getIsLoggedIn() {
	const auth = getAuth(app);
	console.log(auth.currentUser);
	if (auth.currentUser) return false;
	return true;
}
