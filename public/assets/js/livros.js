const abreModal = document.getElementById('modal-btn');
const fechaModal = document.getElementById('close-btn');
const modal = document.getElementById('modal-quiz');

fechaModal.addEventListener('click', () => {
	modal.classList.add("hidden");
});

abreModal.addEventListener('click', () => {
	modal.classList.remove("hidden");
});