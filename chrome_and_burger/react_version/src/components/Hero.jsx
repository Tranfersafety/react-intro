import React from "react";

const Hero = () => {
	return (
		<section className="flex flex-col md:flex-row my-8 px-8 max-w-screen-xl mx-auto">
			<div className="flex-1 bg-blue-100 rounded-3xl p-8 flex flex-col justify-center mb-4">
				<h1 className="text-6xl mb-2 font-bold">Chrome & Burger</h1>
				<p className="my-8 font-medium text-xl">
					Feeling famished after conquering those waves? Look no further than
					Chrome & Burger, your one-stop shop for gourmet grub that's as classic
					as a beach sunset and as shiny as a chrome fender!
				</p>
				<div className="mt-5 mb-3">
					<a
						href="#"
						target="_blank"
						className="inline-block px-8 py-2 bg-blue-700 text-white rounded-lg hover:bg-black active:bg-red-500"
					>
						Full Menu
					</a>
				</div>
			</div>
			<div className="flex-1 bg-yellow-500 rounded-3xl p-8 flex justify-center">
				<img
					src="/assets/images/BurgerTruck.jpeg"
					alt="Burger Truck"
					className="object-cover w-full h-full"
				/>
			</div>
		</section>
	);
};

export default Hero;
