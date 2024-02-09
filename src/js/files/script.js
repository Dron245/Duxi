// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	console.log(targetElement);
	const menuList =document.querySelector('.menu__list')
	if(targetElement.closest('.menu__link')){
		let menuItem = targetElement.closest('.menu__item')
		targetElement.classList.toggle('_open')
		targetElement.closest('.menu__item').querySelector('.menu__sublist') ? 
		targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open') : null
		// menuItem.classList.add('_open')
		// menuList.classList.toggle('_sub-menu-open')
	}

	if(!targetElement.closest('.menu__body' )){
		if(document.documentElement.classList.contains('menu-open')){
			document.documentElement.classList.remove('menu-open')
			document.documentElement.classList.remove('lock')
		}
	}
}