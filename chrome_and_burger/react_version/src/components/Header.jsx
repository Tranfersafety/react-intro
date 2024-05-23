import React, { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="flex justify-between items-center  border-b max-w-screen-xl mx-auto relative md:flex-row">
			<a
				href="#"
				className="flex items-center px-8 font-semibold text-black"
			>
				<div className="text-4xl h-16 w-16 flex items-center justify-center">
					🍔
				</div>
				<div className="ml-2 text-3xl font-bold">Chrome & Burger</div>
			</a>
			<nav
				className={`flex items-center px-12 ${
					isMenuOpen ? "w-full justify-center gap-28" : ""
				}`}
			>
				<ul
					id="menu"
					className={`list-none gap-4 flex-col md:flex md:flex-row ${
						isMenuOpen ? "flex" : "hidden"
					}`}
				>
					<li>
						<a
							href="#"
							className="block px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#menu-burgers"
							className="block px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
						>
							Menu
						</a>
					</li>
					<li>
						<a
							href="#menu-burgers"
							className="block px-10 py-2 bg-blue-700 text-white rounded-lg hover:bg-black active:bg-red-500"
						>
							Order Now
						</a>
					</li>
				</ul>
				<button
					id="mobile-toggle"
					className={`md:hidden flex p-2`}
					onClick={toggleMobileMenu}
				>
					<img
						src="/assets/images/mobileToggle.svg"
						alt="Mobile Toggle"
					/>
				</button>
			</nav>
		</header>
	);
};

export default Header;
