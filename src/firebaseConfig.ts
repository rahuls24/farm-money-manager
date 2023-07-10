// Import the functions you need from the SDKs you need
import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseApp, FirebaseError, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

let appInstance: FirebaseApp | null = null;
let analyticsInstance: Analytics | null = null;

/**
 * Retrieves the Firebase app instance, initializes it if not already initialized, and returns it.
 * @returns {FirebaseApp | FirebaseError} - The Firebase app instance or an instance of FirebaseError.
 */
export function getFirebaseAppInstance(): FirebaseApp | FirebaseError {
	if (appInstance === null) {
		try {
			appInstance = initializeApp(firebaseConfig);
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				return error;
			}
			return new FirebaseError(
				'app/initialization-error',
				'Something went wrong while initializing the Firebase app.'
			);
		}
	}
	return appInstance;
}

/**
 * Retrieves the Firebase analytics instance, initializes it if not already initialized, and returns it.
 * @returns {Analytics | FirebaseError} - The Firebase analytics instance or an instance of FirebaseError.
 */
export function getFirebaseAnalytics(): Analytics | FirebaseError {
	if (analyticsInstance === null) {
		const app = getFirebaseAppInstance();
		if (app instanceof FirebaseError) return app;
		try {
			analyticsInstance = getAnalytics(app);
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				return error;
			}
			return new FirebaseError(
				'analytics/initialization-error',
				'Something went wrong while initializing Firebase analytics.'
			);
		}
	}
	return analyticsInstance;
}
