import React from "react";
import { Navbar } from "../components/Navbar";

export const MyCart = () => {
	return (
		<div className="h-full w-full ">
			<Navbar />

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				<div className=" flex flex-col justify-between ">
					<img
						className="object-fit h-[250px] w-[350px]"
						src="https://images.unsplash.com/photo-1598030343246-eec71cb44231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiYmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
						alt=""
					/>
					<h1 className="text-xl text-green-500">Cabbage</h1>
					<h1 className="text-lg text-orange-500">50$</h1>
				</div>
				<div className=" flex flex-col justify-between ">
					<img
						className="object-fit h-[250px] w-[350px]"
						src="https://images.unsplash.com/photo-1598030343246-eec71cb44231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiYmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
						alt=""
					/>
					<h1 className="text-xl text-green-500">Cabbage</h1>
					<h1 className="text-lg text-orange-500">50$</h1>
				</div>
			</div>
		</div>
	);
};
