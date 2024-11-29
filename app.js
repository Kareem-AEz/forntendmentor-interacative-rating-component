"use strict";

const feedbackCard = document.querySelector(".feedback");

const handleOnMouseMove = (e) => {
	const targetHovered = e.target.closest(".feedback");
	if (!targetHovered.closest(".feedback") === feedbackCard) return;

	const rect = targetHovered.getBoundingClientRect();

	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	targetHovered.style.setProperty("--mouse-X", `${x}px`);
	targetHovered.style.setProperty("--mouse-Y", `${y}px`);
};

let lastFrameTime = 0;
const FPS = 30;
const frameInterval = 1000 / FPS;

const throttleMouseMove = (e) => {
	const now = performance.now();

	if (now - lastFrameTime > frameInterval) {
		requestAnimationFrame(() => handleOnMouseMove(e));
		lastFrameTime = now;
	}
};

feedbackCard.addEventListener("mousemove", throttleMouseMove);

const formBtn = document.querySelector(".btn");
const form = document.querySelector("form");
const animation = document.querySelector(".animation");

const feedbackMessage = document.querySelector(".feedback__message");
let messageTimer = null;

const displayMessage = (message) => {
	if (messageTimer) clearTimeout(messageTimer);

	feedbackMessage.classList.remove("feedback__message--hidden");
	feedbackMessage.textContent = "";
	feedbackMessage.textContent = message;

	messageTimer = setTimeout(() => {
		feedbackMessage.classList.add("feedback__message--hidden");
	}, 3500);
};

formBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const checked = document.querySelector("input[type=radio]:checked");
	if (!checked) {
		displayMessage("Please select a rating!");
		console.error("Please select a rating!");
		return;
	}

	const ratingValuee = checked.getAttribute("value");

	console.log(ratingValuee);

	if (ratingValuee === "5") {
		animation.classList.remove("animation--hidden");
	} else {
		displayMessage("Try 5 star rating!");
	}

	ratingValue.textContent = ratingValuee;
	feedbackRating.classList.remove("feedback--show");
	feedbackAppreciation.classList.add("feedback--show");
	feedbackCard.style.height = `calc(${heightFeedback} + 6.2rem)`;

	feedbackCard.style.top = console.log(e.target, checked);
});

const feedbackRating = document.querySelector(".feedback__rating");
const feedbackAppreciation = document.querySelector(".feedback__appreciation");
const ratingValue = feedbackAppreciation.querySelector("span");

const heightFeedback =
	getComputedStyle(feedbackCard).getPropertyValue("height");
