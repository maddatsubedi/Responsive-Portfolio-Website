let menu = document.querySelector('#menu-icon-js');
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navtc = document.querySelector('#nav-tc-js');

menu.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	navtc.classList.toggle("nav-touch-close-open");
}

navtc.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.remove('open');
	navtc.classList.remove('nav-touch-close-open');
	navtc.classList.remove("nav-tc-z");
	navtc.classList.remove("nav-LR-TC");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;

	document.getElementById("header").classList.add('scrolled');
	if (currentScrollPos === 0) {
		// console.log("Hello");
		document.getElementById("header").classList.remove('scrolled');
	}
	if (navtc.classList.contains('nav-touch-close-open')) {
		return;
	}
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}


const contactSection = document.querySelector('.contact-section');
const formSection = document.querySelector('.form-section');
const contactSubmitAfter = document.querySelector('.contact-submit-after');
const csaOK = document.querySelector('.csa-ok');


const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorDiv = document.querySelector('.error');
const emailErrorDiv = document.querySelector('.email-error');
const contactButton = document.querySelector('.contact-button');
const contactLoad = document.querySelector('.contact-load');
const submitText = document.querySelector('.submit-text');

if (csaOK) {
	csaOK.onclick = () => {
		contactSubmitAfter.classList.remove('show');
		formSection.classList.remove('hide');
		contactSection.classList.remove('csa-cs');
		contactForm.classList.remove('csa-cf');
		contactButton.classList.remove('loading');
		contactLoad.classList.remove('show');
		submitText.classList.remove('hide');
		// contactSubmitAfter.classList.add('hide');
	}
}

// Function to validate the form
function validateForm(event) {
	event.preventDefault(); // Prevent the form from submitting
	let isValid = true;
	emailIsValid = true;
	nameIsValid = true;
	messageIsValid = true;

	// Check if Name field is empty
	if (nameInput.value.trim() === '') {
		isValid = false;
		nameIsValid = false;
	}

	// Check if Email field is empty or not a valid email address
	if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
		isValid = false;
		if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
			emailIsValid = false;
		}
	}

	// Check if Message field is empty
	if (messageInput.value.trim() === '') {
		isValid = false;
		messageIsValid = false;
	}

	if (!isValid) {
		// Display the error message
		errorDiv.classList.add('error-show');
		emailErrorDiv.classList.remove('error-show');
		if (nameIsValid && messageIsValid && !emailIsValid) {
			errorDiv.classList.remove('error-show');
			emailErrorDiv.classList.add('error-show');
		}
	} else {
		// Form is valid, it can be sumbitted now
		emailErrorDiv.classList.remove('error-show');
		errorDiv.classList.remove('error-show');
		contactButton.classList.add('loading');
		contactLoad.classList.add('show');
		submitText.classList.add('hide');
		setTimeout(function () {
			sendMail();
		}, 2000);
	}
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Event listener for form submission
if (contactForm) {
	contactForm.addEventListener('submit', validateForm);
}


// After adding the Email Js APi key in the script tag of the contact.html, uncomment this function section

function sendMail() {

	// Remove this section after adding the Email Js APi key in the script tag of the contact.html, uncomment this function section
	// From this
	contactSubmitAfter.classList.add('show');
	formSection.classList.add('hide');
	contactSection.classList.add('csa-cs');
	contactForm.classList.add('csa-cf');
	// To this

	// var params = {
	// 	name: document.getElementById('name').value,
	// 	email: document.getElementById('email').value,
	// 	message: document.getElementById('message').value
	// }

	// const serviceID = "service_evf2wim";
	// const templateID = "template_v085uvl";

	// emailjs.send(serviceID, templateID, params)
	// 	.then(
	// 		res => {
	// 			document.getElementById('name').value = "";
	// 			document.getElementById('email').value = "";
	// 			document.getElementById('message').value = "";

	// 			contactSubmitAfter.classList.add('show');
	// 			formSection.classList.add('hide');
	// 			contactSection.classList.add('csa-cs');
	// 			contactForm.classList.add('csa-cf');

	// 		}
	// 	)
	// 	.catch((error) => {
	// 		console.log(error);
	// 	})
}
