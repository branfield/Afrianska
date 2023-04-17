document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
    document.body.style.overflow = 'hidden';
})

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
    document.body.style.overflow = 'visible';
})

document.getElementById("close-success-btn").addEventListener("click", function() {
    document.getElementById("success").classList.remove("open");
    document.body.style.overflow = 'visible';
})

document.getElementById("ok").addEventListener("click", function() {
    document.getElementById("success").classList.remove("open");
    document.body.style.overflow = 'visible';
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open");
        document.body.style.overflow = 'visible';
    }
    if (e.key === "Escape") {
        document.getElementById("success").classList.remove("open");
        document.body.style.overflow = 'visible';
    }
});

document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.body.style.overflow = 'visible';
});

document.querySelector("#success .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("success").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.body.style.overflow = 'visible';
});
