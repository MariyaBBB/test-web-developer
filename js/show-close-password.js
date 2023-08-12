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