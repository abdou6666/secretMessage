document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const input = document.querySelector('#message-input').value;
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');
	const encrypted = btoa(input);
	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});

document.addEventListener('DOMContentLoaded', (event) => {
	if (window.location.hash.length) {
		const { hash } = window.location;
		const decrypted = atob(hash.replace('#', ''));
		document.querySelector('#message-show').classList.remove('hide');
		document.querySelector('#message-form').classList.add('hide');
		document.querySelector('h1').textContent = decrypted;
	}
});
