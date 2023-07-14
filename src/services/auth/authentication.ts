import { FirebaseApp, FirebaseError } from 'firebase/app';
import {
	UserCredential,
	browserLocalPersistence,
	browserSessionPersistence,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { getFirebaseAppInstance } from '../../firebaseConfig';
let appInstance: FirebaseApp | null = null;
(() => {
	const app = getFirebaseAppInstance();
	if (app instanceof FirebaseError) return;
	appInstance = app;
})();
export async function getLoggedInUser() {
	if (!appInstance) return false;
	const auth = getAuth(appInstance);
	return new Promise((resolve, reject) => {
		onAuthStateChanged(auth, resolve);
	});
}
export function getUserDetails() {
	if (!appInstance) return false;
	const auth = getAuth(appInstance);
	return auth.currentUser;
}
export async function signupUsingEmailAndPassword(
	email: string,
	password: string,
	name: string,
): Promise<boolean | FirebaseError> {
	if (!appInstance)
		return new FirebaseError(
			'app/initialization-error',
			'Something went wrong while initializing the Firebase app.',
		);
	const auth = getAuth(appInstance);
	try {
		const loggedInUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		await updateProfile(loggedInUser.user, {
			displayName: name,
		});
		return true;
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
			return error;
		}
		return new FirebaseError(
			'auth/error',
			'Something went wrong while signin.',
		);
	}
}
export async function signInUsingEmailAndPassword(
	email: string,
	password: string,
	isRememberMeSelected: boolean = true,
): Promise<UserCredential | FirebaseError> {
	if (!appInstance)
		return new FirebaseError(
			'app/initialization-error',
			'Something went wrong while initializing the Firebase app.',
		);
	const auth = getAuth(appInstance);
	try {
		if (isRememberMeSelected)
			await setPersistence(auth, browserLocalPersistence);
		else setPersistence(auth, browserSessionPersistence);
		const loggedInUser = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		return loggedInUser;
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
			return error;
		}
		return new FirebaseError(
			'auth/error',
			'Something went wrong while signin.',
		);
	}
}
export async function signOutTheUser() {
	if (!appInstance) return null;
	const auth = getAuth(appInstance);
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		return false;
	}
}

export function getCurrentSigninUser() {
	if (!appInstance) return null;
	return getAuth(appInstance).currentUser;
}

export async function resetPasswordBySendingMail(
	email: string,
): Promise<boolean | FirebaseError> {
	if (!appInstance)
		return new FirebaseError(
			'app/initialization-error',
			'Something went wrong while initializing the Firebase app.',
		);
	const auth = getAuth(appInstance);
	try {
		await sendPasswordResetEmail(auth, email);
		return true;
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
			return error;
		}
		return new FirebaseError(
			'auth/error',
			'Something went wrong while sending reset email.',
		);
	}
}
