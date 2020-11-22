let toggleStatus = false;

function toggleMenu() {
	if (toggleStatus == false) {
		const navanimation = document.getElementById("navbarAnchor");
		navanimation.style.right = "0rem";
		toggleStatus = true;
	} else {
		const navanimation = document.getElementById("navbarAnchor");
		navanimation.style.right = "-20rem";
		toggleStatus = false;
	}
}
