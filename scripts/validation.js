function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;

        parent.classList.add('error');

        parent.append(errorLabel);
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');
    const allTextarea = form.querySelectorAll('textarea');

    for (const input of allInputs) {

        removeError(input);

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input);
                createError(input, 'The field cannot be empty');
                result = false;
            }
        }

    }

    for (const textarea of allTextarea) {

        removeError(textarea);

        if (textarea.dataset.required == "true") {
            if (textarea.value == "") {
                removeError(textarea);
                createError(textarea, 'The field cannot be empty');
                result = false;
            }
        }

    }

    return result;
}

document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('The form has been verified successfully');
    }

})