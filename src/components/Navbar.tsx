import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AiFillCloseCircle, AiOutlineLogin } from "react-icons/ai";
import { BiRegistered, BiFoodMenu } from "react-icons/bi";

export const Navbar = () => {
	const [nav, setNav] = useState<Boolean>(false);

	return (
		<nav className=" mx-auto flex max-w-[1660px] items-center justify-between bg-black p-4 text-black">
			<div className="flex justify-around ">
				{/* Menu, Logo */}
				<div className="flex items-center">
					<FiMenu
						onClick={() => setNav(!nav)}
						className="cursor-pointer text-white"
						size={30}
					/>

					<h1 className="px-2 text-2xl text-green-500 md:text-3xl lg:text-4xl">
						Whole{" "}
						<span className="font-bold text-white">Foodz</span>
					</h1>
				</div>
				<div className="hidden items-center rounded-full bg-gray-200 p-1 text-2xl text-[14px] font-bold lg:flex">
					<p className="rounded-full bg-green-500 p-2 text-xl">
						Delivery
					</p>
					<p className="text-xl">Pickup</p>
				</div>
			</div>
			{/* Search */}
			<div className="flex w-[200px] items-center rounded-full bg-gray-200 px-2 sm:w-[400px] lg:w-[500px]">
				<FaSearch size={25} />
				<input
					className="bg-transparent p-2 focus:outline-none "
					type="text"
					placeholder="Search ..."
				/>
			</div>
			<FaShoppingCart
				className="hidden cursor-pointer py-2  text-white duration-500 hover:scale-110 hover:text-green-500 md:flex"
				size={50}
			/>

			{/* overlay for side cart */}
			{nav && (
				<div className="absolute top-0 left-0 z-10 h-screen w-full bg-black/70"></div>
			)}
			<div
				className={
					nav
						? "absolute top-0 left-0 z-10 h-screen w-[310px]  bg-black text-green-500 duration-500"
						: "absolute top-0 left-[-100%] z-10 h-screen  w-[310px] bg-white duration-500"
				}
			>
				<AiFillCloseCircle
					className="absolute right-4 top-4 cursor-pointer"
					size={30}
					onClick={() => setNav(!nav)}
				/>
				<h1 className="p-4 text-2xl font-bold">Whole Foodz</h1>
				<div>
					<ul className="flex  flex-col py-4 pl-8 text-xl font-bold ">
						<li className="mr-10 flex cursor-pointer border-b-2 border-green-500 py-4 text-xl">
							<AiOutlineLogin size={25} className="mr-4" /> Orders
						</li>
						<li className="mr-10 flex cursor-pointer border-b-2 border-green-500 py-4 text-xl">
							<BiRegistered size={25} className="mr-4" />{" "}
							Favorites
						</li>
						<li className="mr-10 flex cursor-pointer border-b-2 border-green-500 py-4 text-xl">
							<FaShoppingCart size={25} className="mr-4" /> Wallet
						</li>
						<li className="mr-10 flex cursor-pointer border-b-2 border-green-500 py-4 text-xl">
							<BiFoodMenu size={25} className="mr-4" /> Help
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
