// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		// console.log(targetElement);
		if(targetElement.closest('.menu__link')){
			targetElement.classList.toggle('_open')
			targetElement.closest('.menu__item').querySelector('.menu__sublist') ? 
			targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open') : null
		}

		if(!targetElement.closest('.menu__icon') && !targetElement.closest('.menu__body' )){
			console.log(targetElement);
			// if(document.documentElement.classList.contains('menu-open' && document.documentElement.classList.contains('lock'))){
				document.documentElement.classList.remove('menu-open')
				document.documentElement.classList.remove('lock')
			// }
		}

		//переключаю значок пароля с видеть на не видеть
		if(targetElement.closest('.popup__img-pasword')){
			targetElement.closest('.popup__img-pasword').classList.toggle('_pass-view')
		}
	}

	if (window.innerWidth <= 768 ) {
		tabs01.classList.remove('_tab-active')
		tabs02.classList.add('_tab-active')
	}
});


