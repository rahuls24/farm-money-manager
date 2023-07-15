import { FirebaseApp, FirebaseError } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getFirebaseAppInstance } from '../../firebaseConfig';
import { getCurrentSigninUser } from '../auth/authentication';
let appInstance: FirebaseApp | null = null;
(() => {
	const app = getFirebaseAppInstance();
	if (app instanceof FirebaseError) return;
	appInstance = app;
})();
export async function getAllFarmDetails() {
	try {
		const currentSigninUser = getCurrentSigninUser();
		if (!currentSigninUser) return [];
		if (!appInstance) return [];
		const db = getFirestore(appInstance);
		const farmDetailsRef = doc(
			db,
			'farm-details',
			'NQABJpfmguaBuHQ2RfbnVIN9RQj1',
		);
		const docSnap = await getDoc(farmDetailsRef);
		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data()?.data);
		} else {
			// docSnap.data() will be undefined in this case
			console.log('No such document!');
		}
		console.log('data is ', farmDetailsRef);
	} catch (error) {
		console.log(error);
		return [];
	}
}
