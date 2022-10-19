import { User } from "firebase/auth";

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

export interface ICart extends User {
	myCart: [id: number, image: string];
}
