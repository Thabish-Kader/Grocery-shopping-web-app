export interface CardInfo {
	title: string;
	subTitle: string;
	img: string;
	border: string;
	button: string;
	text: string;
}

export interface FoodData {
	id: number;
	name: string;
	image: string;
	price: string;
}

export interface AppContextInterface {
	uid: string;
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	password: string;
	displayName: string;
	photoUrl: string;
	disabled: boolean;
}
export interface AuthProviderProps {
	children?: React.ReactNode;
}
