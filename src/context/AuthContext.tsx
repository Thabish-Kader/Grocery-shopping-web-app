import React, {
	createContext,
	FC,
	useContext,
	useEffect,
	useState,
} from "react";
import { AuthProviderProps } from "../interface/interface";
import {
	createUserWithEmailAndPassword,
	User,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth, provider } from "../config/firebase";

const AuthContext = createContext<User | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	// const signUp = async (email: string, password: string) => {
	// 	await createUserWithEmailAndPassword(auth, email, password)
	// };

	// const signUpWithGoogle = async () => {
	// 	await signInWithPopup(auth, provider)
	// 		.then((result) => {
	// 			// The signed-in user info.
	// 			console.log(result.user);
	// 			setUser(result.user);
	// 		})
	// 		.catch((error) => {
	// 			console.log(
	// 				`error code ${error.code}`,
	// 				`error message ${error.message}`
	// 			);
	// 		});
	// };

	// const signIn = async (email: string, password: string) => {
	// 	await signInWithEmailAndPassword(auth, email, password).catch(
	// 		(error) => {
	// 			console.log(
	// 				`error code ${error.code}`,
	// 				`error message ${error.message}`
	// 			);
	// 		}
	// 	);
	// };

	// const signout = async () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			console.log("sign out successful");
	// 		})
	// 		.catch((error) => {
	// 			console.log(
	// 				`error code ${error.code}`,
	// 				`error message ${error.message}`
	// 			);
	// 		});
	// };

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser);
		});
		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
