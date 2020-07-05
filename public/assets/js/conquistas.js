const abreRewards = document.getElementById('rewards-btn');
const fechaRewards = document.getElementById('close-rewards-btn');
const modalRewards = document.getElementById('modal-rewards');

fechaRewards.addEventListener('click', () => {
	modalRewards.classList.add("hidden");
});

abreRewards.addEventListener('click', () => {
	modalRewards.classList.remove("hidden");
});

const abrePoints = document.getElementById('points-btn');
const fechaPoints = document.getElementById('close-points-btn');
const modalPoints = document.getElementById('modal-points');

fechaPoints.addEventListener('click', () => {
	modalPoints.classList.add("hidden");
});

abrePoints.addEventListener('click', () => {
	modalPoints.classList.remove("hidden");
});