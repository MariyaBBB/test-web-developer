const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');

const timeout = 800;

if (modalLinks.length > 0) {
    for(let index = 0; index < modalLinks.length; index++) {
        const modalLink = modalLinks[index];
        modalLink.addEventListener("click", function(e) {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const curentModal = document.getElementById(modalName);
            modalOpen(curentModal);
            e.preventDefault();
        })
    }
}

const modalCloseButtons = document.querySelectorAll('.close-modal');
if(modalCloseButtons.length > 0) {
    for(let index = 0; index < modalCloseButtons.length; index++) {
        const modalCloseButton = modalCloseButtons[index];
        modalCloseButton.addEventListener('click', function(e) {
            modalClose(modalCloseButton.closest('.modal'));
            e.preventDefault();
        })
    }
}

function modalOpen(curentModal) {
    if(curentModal) {
        const modalActive = document.querySelector('.modal.open');
        if(modalActive) {
            modalClose(modalActive);
        } 
        curentModal.classList.add('open');
        curentModal.addEventListener("click", function(e) {
            if (!e.target.closest('.modal-content')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}

const passwordControls = document.querySelectorAll('.password-control');
const passwordInputs = document.querySelectorAll('.password');

for(let index = 0; index < passwordControls.length; index++) {
    const passwordControl = passwordControls[index];
    passwordControl.addEventListener('click', () => {
        if(passwordInputs[index].type === 'password') {
            passwordInputs[index].type = 'text';
            passwordControl.classList.remove('view');
            passwordControl.classList.add('no-view');
        } else {
            passwordInputs[index].type = 'password'
            passwordControl.classList.remove('no-view');
            passwordControl.classList.add('view');
        }
    })
}

const saveButton = document.querySelector('.save-button');
const modalMessage = document.querySelector('.modal-message');
const modalForm = document.querySelector('.modal-form');
const messageNoMatchPasswords = document.querySelector('.message-no-match-passwords');

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    for(let index = 0; index < passwordInputs.length; index++) {
        passwordInputs[index].value = "";
        passwordInputs[index].classList.remove('no-match-password');
    }

    messageNoMatchPasswords.style.display = "none";
    modalMessage.classList.remove('open');
    modalForm.classList.remove('hidden-modal');
}

function showMessage() {
    modalMessage.classList.add('open');
    modalForm.classList.add('hidden-modal');
}

function validatePasswords(callback) {
    if(passwordInputs[0].value === passwordInputs[1].value) {
        callback();
    }
    else {
        for(let index = 0; index < passwordInputs.length; index++) {
            passwordInputs[index].classList.add('no-match-password');
            messageNoMatchPasswords.style.display = 'block';
        }
    }
}
        
saveButton.addEventListener('click', function() {
    validatePasswords(showMessage); 
});

function modalClose(modalActive) {
    modalActive.classList.remove('open');
    resetForm();
}
