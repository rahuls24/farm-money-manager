import { FirebaseApp, FirebaseError } from 'firebase/app';
import {
	UserCredential,
	browserLocalPersistence,
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirebaseAppInstance } from '../../firebaseConfig';
let appInstance: FirebaseApp | null = null;
(() => {
	const app = getFirebaseAppInstance();
	if (app instanceof FirebaseError) return;
	appInstance = app;
})();
export function getIsLoggedIn() {
	if (!appInstance) return false;
	const auth = getAuth(appInstance);
	console.log(auth.currentUser);
	if (auth.currentUser) return true;
	return false;
}
export async function signInUsingEmailAndPassword(
	email: string,
	password: string,
): Promise<UserCredential | null> {
	if (!appInstance) return null;
	const auth = getAuth(appInstance);
	try {
		await setPersistence(auth, browserLocalPersistence);
		const loggedInUser = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		return loggedInUser;
	} catch (error) {
		return null;
	}
}
