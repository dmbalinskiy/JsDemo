let btn = document.querySelector('button');
let popupWrapper = document.querySelector('.popup-wrapper');
let close = document.querySelector('.popup-close');

btn.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
})

close.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});
