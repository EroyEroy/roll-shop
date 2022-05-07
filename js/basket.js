let popupBg = document.querySelector('.popup__background'),
	popup = document.querySelector('.popup'),
	openPopupButton = document.querySelectorAll('.basket'),
	popupButtonClose = document.querySelector('.popup__close');

// открытие окна при нажатии на кнопку корзины
openPopupButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popupBg.classList.add('active');
		popup.classList.add('active');
		document.body.style.overflowY = "hidden";
	})
});
// закрытие окна при нажатии на крестик
popupButtonClose.addEventListener('click', () => {
	popupBg.classList.remove('active');
	popup.classList.remove('active');
	document.body.style.overflowY = "scroll";
});
// закрытие окна при нажатии на свободное место
document.addEventListener('click', (e) => {
	if (e.target === popupBg){
		popupBg.classList.remove('active');
		popup.classList.remove('active');
		document.body.style.overflowY = "scroll";
	}
});
// закрытие окна при нажатии на кнопку ESC
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		popupBg.classList.remove('active');
		popup.classList.remove('active');
		document.body.style.overflowY = "scroll";
	}
});