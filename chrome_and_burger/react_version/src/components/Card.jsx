import React from "react";

const Card = ({ image, altText, title, description }) => {
	return (
		<article className="flex-1 bg-yellow-500 p-8 rounded-3xl">
			<figure className="pt-8 overflow-hidden">
				<img
					src={image}
					alt={altText}
					className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-full"
				/>
			</figure>
			<h3 className="text-3xl font-bold my-8">{title}</h3>
			<p className="mb-4 text-xl font-medium">{description}</p>
		</article>
	);
};

export default Card;
