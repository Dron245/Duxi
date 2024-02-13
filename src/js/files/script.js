// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		
		// Открытие сабменю в мобильной версии
		if(targetElement.closest('.menu__link')){
			targetElement.classList.toggle('_open')
			targetElement.closest('.menu__item').querySelector('.menu__sublist') ? 
			targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open') : null
		}
		// закрытие меню бургер вне клика по меню
		if(!targetElement.closest('.menu__icon') && !targetElement.closest('.menu__body' )){
			// if(document.documentElement.classList.contains('menu-open' && document.documentElement.classList.contains('lock'))){
			document.documentElement.classList.remove('menu-open')
			document.documentElement.classList.remove('lock')
			// }
		}
		
		// Закрытие/открытие окна "выбор города" при клике на кнопку "Да, всё верно"
		if(targetElement.closest('.city-choice__button')) {
			const city = targetElement.closest('.top-header__city').querySelector('.city-choice')
			city.hidden = true; return;
		}

		if( targetElement.closest('.top-header__city') && document.querySelector('.guest') && document.querySelector('.city-choice').hidden) {
			const city = targetElement.closest('.top-header__city').querySelector('.city-choice')
			city.hidden = false; return;
		}
		//переключаю значок пароля с видеть на не видеть
		if(targetElement.closest('.popup__img-pasword')){
			targetElement.closest('.popup__img-pasword').classList.toggle('_pass-view')
		}
	}

	//Работа с табами на главной странице под банером
	if (window.innerWidth <= 768 ) {
		tabs01.classList.remove('_tab-active')
		tabs02.classList.add('_tab-active')
	}
});


