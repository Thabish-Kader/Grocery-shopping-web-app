// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC9s4sKGWXU6-bBn-pDhi2aWFJiql85D3c",
	authDomain: "grocery-web-app-28a2e.firebaseapp.com",
	projectId: "grocery-web-app-28a2e",
	storageBucket: "grocery-web-app-28a2e.appspot.com",
	messagingSenderId: "636650204454",
	appId: "1:636650204454:web:b176431bb9d885a118e5e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
