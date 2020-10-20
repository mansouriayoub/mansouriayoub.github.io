const form = document.querySelector('#contactForm');
const messageAlert = document.querySelector('#message');
const messageEmail = document.querySelector('#messageEmail');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('#email').value
    
    if (validateEmail(email)) {
        errorMessage('Server not working', messageAlert)
        // form.reset();
        setTimeout(() => {
            messageAlert.classList.add('d-none');
        }, 5000);
        if (messageAlert.classList.contains('d-none')) {
            messageAlert.classList.remove('d-none');
        }
    }else{
        errorMessage("Email isn't valid", messageEmail)
        setTimeout(() => {
            messageEmail.classList.add('d-none');
        }, 2000);
        if (messageEmail.classList.contains('d-none')) {
            messageEmail.classList.remove('d-none')
        }
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function successMessage(text, component) {
    component.classList.add('badge')
    component.classList.add('badge-success')
    component.textContent = text;
}
function errorMessage(text, component) {
    component.classList.add('alert')
    component.classList.add('badge-danger')
    component.textContent = text;
}