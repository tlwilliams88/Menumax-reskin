;(function() {
	var name = document.getElementsByName('name')[0],
		email = document.getElementsByName('email')[0],
		message = document.getElementsByName('message')[0],
		submitButton = document.querySelector('.contacts__form__submit'),
		formElement = document.getElementsByTagName('form')[0];

	submitButton.addEventListener('click', checkForm);

	function checkForm(event) {
		event.preventDefault();

		var checkName = false,
			checkEmail = false,
			checkMessage = false;

		if(checkName = name.reportValidity()) {
			name.classList.remove('no-validate-input');
		} else {
			name.classList.add('no-validate-input');
		}

		if(checkEmail = email.reportValidity()) {
			email.classList.remove('no-validate-input');
		} else {
			email.classList.add('no-validate-input');
		}

		if(checkMessage = message.reportValidity()) {
			message.classList.remove('no-validate-input');
		} else {
			message.classList.add('no-validate-input');
		}

		if(checkName && checkEmail && checkMessage) {
			formElement.submit();
			formElement.reset();
		}
	}
}) ();