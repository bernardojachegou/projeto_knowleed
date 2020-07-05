const abreSinopse = document.getElementById('sinopse-btn');
const fechaSinopse = document.getElementById('close-sinopse-btn');
const modalSinopse = document.getElementById('modal-sinopse');

fechaSinopse.addEventListener('click', () => {
	modalSinopse.classList.add("hidden");
});

abreSinopse.addEventListener('click', () => {
	modalSinopse.classList.remove("hidden");
});

const abreReviews = document.getElementById('review-btn');
const fechaReviews = document.getElementById('close-review-btn');
const modalReviews = document.getElementById('modal-reviews');

fechaReviews.addEventListener('click', () => {
	modalReviews.classList.add("hidden");
});

abreReviews.addEventListener('click', () => {
	modalReviews.classList.remove("hidden");
});

const abreQuiz = document.getElementById('quiz-btn');
const abreQuizDois = document.getElementById('quiz-btn-2');
const fechaQuiz = document.getElementById('close-quiz-btn');
const modalQuiz = document.getElementById('modal-quiz');

fechaQuiz.addEventListener('click', () => {
	modalQuiz.classList.add("hidden");
});

abreQuiz.addEventListener('click', () => {
	modalQuiz.classList.remove("hidden");
});

abreQuizDois.addEventListener('click', () => {
	modalQuiz.classList.remove("hidden");
});