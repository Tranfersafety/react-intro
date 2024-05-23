// Function to toggle the mobile menu
function toggleMobileMenu() {
	const header = document.querySelector("header");
	header.classList.toggle("flex-col");
	const nav = document.querySelector("nav");
	nav.classList.toggle("w-full");
	nav.classList.toggle("justify-between");
	const menu = document.querySelector("#menu");
	menu.classList.toggle("hidden");
	menu.classList.toggle("ml-56");
}

// Add event listener to the mobile toggle button
document.addEventListener("DOMContentLoaded", function () {
	const mobileToggle = document.getElementById("mobile-toggle");
	if (mobileToggle) {
		mobileToggle.addEventListener("click", toggleMobileMenu);
	}
});
