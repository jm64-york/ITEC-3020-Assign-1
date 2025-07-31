document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    fetch('./header.html')
    .then(x => x.text())
    .then(y => headerElement.innerHTML = y);
    const footerElement = document.querySelector('footer');
    fetch('./footer.html')
    .then(x => x.text())
    .then(y => footerElement.innerHTML = y);
});