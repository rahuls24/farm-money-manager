// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB8Iu6w8r9qEz7ZHi9YGrk100v2C_94gS8',
	authDomain: 'farm-money-manager.firebaseapp.com',
	projectId: 'farm-money-manager',
	storageBucket: 'farm-money-manager.appspot.com',
	messagingSenderId: '90044557242',
	appId: '1:90044557242:web:e8b8c2805d074148a41f83',
	measurementId: 'G-RXRK544B0G',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
