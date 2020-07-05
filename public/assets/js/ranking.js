var node = document.getElementById('capture');
var btnDownload = document.getElementById('download');
btnDownload.onclick = function() {
node.innerHTML = node.innerHTML
domtoimage.toBlob(document.getElementById('capture')).then(function(blob) {window.saveAs(blob, 'meu-progresso.png');});
}

const abreRewards = document.getElementById('rewards-btn');
const fechaRewards = document.getElementById('close-rewards-btn');
const modalRewards = document.getElementById('modal-rewards');

fechaRewards.addEventListener('click', () => {
	modalRewards.classList.add("hidden");
});

abreRewards.addEventListener('click', () => {
	modalRewards.classList.remove("hidden");
});