// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: "AIzaSyC9s4sKGWXU6-bBn-pDhi2aWFJiql85D3c",
	// authDomain: "grocery-web-app-28a2e.firebaseapp.com",
	// projectId: "grocery-web-app-28a2e",
	// storageBucket: "grocery-web-app-28a2e.appspot.com",
	// messagingSenderId: "636650204454",
	// appId: "1:636650204454:web:b176431bb9d885a118e5e7",
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER,
	appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
