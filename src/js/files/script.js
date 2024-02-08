// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	const menuList =document.querySelector('.menu__list')
	if(targetElement.closest('.menu__link')){
		let menuItem = targetElement.closest('.menu__item')
		targetElement.classList.add('_open')
		menuItem.classList.add('_open')
		menuList.classList.add('_sub-menu-open')
	}

}