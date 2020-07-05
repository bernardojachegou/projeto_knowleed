const abreReviews = document.getElementById('review-btn');
const abreReviewsDois = document.getElementById('review-btn-dois');
const fechaReviews = document.getElementById('close-review-btn');
const modalReviews = document.getElementById('modal-reviews');

fechaReviews.addEventListener('click', () => {
	modalReviews.classList.add("hidden");
});

abreReviews.addEventListener('click', () => {
	modalReviews.classList.remove("hidden");
});

abreReviewsDois.addEventListener('click', () => {
	modalReviews.classList.remove("hidden");
});

const abreWrite = document.getElementById('write-btn');
const abreWriteDois = document.getElementById('write-btn-dois');
const fechaWrite = document.getElementById('close-write-btn');
const modalWrite = document.getElementById('modal-write');
const enviaWrite = document.getElementById('send-write');
const sucessoWrite = document.getElementById('send-success');
const textoWrite = document.getElementById('send-text');

fechaWrite.addEventListener('click', () => {
	modalWrite.classList.add("hidden");
});

abreWrite.addEventListener('click', () => {
	modalWrite.classList.remove("hidden");
	textoWrite.classList.remove("hidden");
});

abreWriteDois.addEventListener('click', () => {
	modalWrite.classList.remove("hidden");
});

enviaWrite.addEventListener('click', () => {
	sucessoWrite.classList.remove("hidden");
	textoWrite.classList.add("hidden");
});