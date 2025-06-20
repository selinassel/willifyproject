const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('pw');
const pw2Input = document.getElementById('pw2');
const ageInput = document.getElementById('age');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

const setSuccess = (element) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.remove('error');
    input.classList.add('success');
}

const validateInput = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const pwValue = pwInput.value.trim();
    const pw2Value = pw2Input.value.trim();
    const ageValue = ageInput.value;

    if (nameValue === '') {
        setError(nameInput, 'Name is required!');
    } else {
        setSuccess(nameInput);
    }

    if (emailValue === '') {
        setError(emailInput, 'Email is required!');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Please enter a valid email address!');
    } else {
        setSuccess(emailInput);
    }

    if (pwValue === '') {
        setError(pwInput, 'Password is required!');
    } else if (pwValue.length < 6) {
        setError(pwInput, 'Password must be at least 6 characters!');
    } else {
        setSuccess(pwInput);
    }

    if (pw2Value === '') {
        setError(pw2Input, 'Please confirm your password!');
    } else if (pwValue !== pw2Value) {
        setError(pw2Input, 'Passwords do not match!');
    } else {
        setSuccess(pw2Input);
    }

    if (ageValue === '') {
        setError(ageInput, 'Age is required!');
    } else if (ageValue < 1 || ageValue > 99) {
        setError(ageInput, 'Please enter a valid age between 1 and 99!');
    } else {
        setSuccess(ageInput);
    }
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
