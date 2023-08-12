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

const modalCloseIcons = document.querySelectorAll('.close-modal');
if(modalCloseIcons.length > 0) {
    for(let index = 0; index < modalCloseIcons.length; index++) {
        const modalCloseIcon = modalCloseIcons[index];
        modalCloseIcon.addEventListener('click', function(e) {
            modalClose(modalCloseIcon.closest('.modal'));
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

function modalClose(modalActive) {
        modalActive.classList.remove('open');
}