document.addEventListener('DOMContentLoaded', () => {
	const formEl = document.querySelector('#contact-form');

	formEl.addEventListener('submit', e => {
		e.preventDefault();
		const formData = new FormData(formEl);
		const errors = {};

		//Validate name
		if(formData.get('name').trim().length) {

		}

		//Validate email
		if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get('email'))) {
			alert('no valid email')
		}
	})
})