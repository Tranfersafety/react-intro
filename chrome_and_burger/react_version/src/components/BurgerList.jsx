import React from "react";
import Card from "./Card";

const burgers = [
	{
		image: "../../public/assets/images/TheAllAmerican.jpeg",
		altText: "The All-American",
		title: "The All-American",
		description:
			"A timeless masterpiece featuring a juicy all-beef patty, melted cheddar cheese, crisp lettuce, vine-ripened tomato, red onion, tangy pickles, and our signature 'Wagon Sauce' on a toasted brioche bun.",
	},
	{
		image: "../../public/assets/images/BaconCheeseburger.jpeg",
		altText: "Bacon Cheeseburger",
		title: "Bacon Cheeseburger",
		description:
			"This beauty boasts a juicy all-beef patty, crisp bacon, melted cheddar cheese, crisp lettuce, vine-ripened tomato, red onion, and tangy pickles, all on a toasted brioche bun.",
	},
	{
		image: "../../public/assets/images/TheAlohaBurger.jpeg",
		altText: "The Aloha Burger",
		title: "The Aloha Burger",
		description:
			"This tropical treat features a juicy all-beef patty topped with grilled pineapple, melted Swiss cheese, crisp lettuce, tangy teriyaki sauce, and a creamy sriracha mayo on a toasted Hawaiian sweet roll.",
	},
];

const BurgerList = () => {
	return (
		<section
			id="menu-burgers"
			className="my-8 max-w-screen-xl mx-auto"
		>
			<h2 className="text-6xl text-center py-4 mb-8 px-8 font-semibold">
				100% Organic Burgers
			</h2>
			<div className="flex flex-col md:flex-row gap-8 px-8">
				{burgers.map((burger, index) => (
					<Card
						key={index}
						image={burger.image}
						altText={burger.altText}
						title={burger.title}
						description={burger.description}
					/>
				))}
			</div>
		</section>
	);
};

export default BurgerList;
