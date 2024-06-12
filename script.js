document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate fields
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var valid = true;

    // Clear previous error messages
    clearValidationErrors(name);
    clearValidationErrors(email);
    clearValidationErrors(phone);

    if (name.value.trim() === '') {
        showValidationError(name, 'Por favor, preencha o campo Nome.');
        valid = false;
    }

    if (email.value.trim() === '') {
        showValidationError(email, 'Por favor, preencha o campo E-mail.');
        valid = false;
    } else if (!validateEmail(email.value.trim())) {
        showValidationError(email, 'Por favor, preencha um E-mail válido.');
        valid = false;
    }

    if (phone.value.trim() === '') {
        showValidationError(phone, 'Por favor, preencha o campo Telefone.');
        valid = false;
    } else if (!validatePhone(phone.value.trim())) {
        showValidationError(phone, 'Por favor, preencha um Telefone válido.');
        valid = false;
    }

    if (valid) {
        document.getElementById('alert-success').classList.remove('d-none');
        document.getElementById('registrationForm').reset();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10,11}$/;
    return re.test(phone);
}

function showValidationError(input, message) {
    input.classList.add('is-invalid');
    input.nextElementSibling.textContent = message;
}

function clearValidationErrors(input) {
    input.classList.remove('is-invalid');
    input.nextElementSibling.textContent = '';
}
