let objects = document.querySelectorAll('.object-main');

objects.forEach(object => {
    object.onclick = (e) => {
        object.parentElement.classList.toggle('active');
    }
});
