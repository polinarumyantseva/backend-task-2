document.addEventListener('click', (event) => {
	if (event.target.dataset.type === 'remove') {
		const id = event.target.dataset.id;

		remove(id).then(() => {
			event.target.closest('li').remove();
		});
	}
	if (event.target.dataset.type === 'edit') {
		const newName = prompt('Введите новое название');

		if (newName) {
			const id = event.target.dataset.id;
			edit(id, newName.trim()).then(() => {
				event.target.closest('li').querySelector('.note-title').textContent = newName;
			});
		}
	}
});

async function remove(id) {
	await fetch(`/${id}`, { method: 'DELETE' });
}

async function edit(id, title) {
	await fetch(`/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
		}),
	});
}
