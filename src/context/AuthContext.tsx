import React, { createContext, FC, useEffect, useState } from "react";
import { AuthProviderProps } from "../interface/interface";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext<User | null>(null);
//todo : pass children as props in bs code
export const AuthProvider: FC = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);

	const signup = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password).then(
			(userCredentials) => {
				console.log(userCredentials);
			}
		);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser);
		});
		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
