// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		console.log(targetElement);
		// Открытие сабменю в мобильной версии
		if(targetElement.closest('.menu__link')){
			targetElement.classList.toggle('_open')
			targetElement.closest('.menu__item').querySelector('.menu__sublist') ? 
			targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open') : null
		}
		// закрытие меню бургер вне клика по меню
		if(!targetElement.closest('.menu__icon') && !targetElement.closest('.menu__body' )){
			document.querySelector('.menu-open') ? document.documentElement.classList.remove('lock') : null
			document.querySelector('.menu-open') ? document.documentElement.classList.remove('menu-open') : null
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

		//Открытие/скрытие строки поиска
		if(targetElement.closest('.search-button')){
			document.documentElement.classList.toggle('_show')
		}
		if(!targetElement.closest('.header-center__form')){
			document.documentElement.classList.remove('_show')
		}

		//Присваивание текста выбранного варианта в спец окно в каталоге в таблетном разрешении
		if(window.innerWidth < 1001 && (targetElement.closest('.options__input') || targetElement.closest('.checkbox__input')) && targetElement.closest('.catalog')) {
			let inp = targetElement.value;
			let val = targetElement.closest('.filters__item').querySelector('.filter__val')
			val.innerHTML = inp;
		}
		
		// Устанавливаю нормальную высоту окна с чекбоксами в каталоге в таблетном разрешении.
		if(targetElement.closest('.filter__title') && targetElement.closest('.filters__item').querySelector('.checkbox')) {
			let list = targetElement.closest('.filters__item').querySelector('.filter__list')
			if(!list.closest('.filter__showmore').classList.contains('_showmore-active')) {
				list.style.height = '80px'
			}
		}
		
		// Связывание пунктов меню и саб-меню в фильрах в каталоге в мобильной версии
		if (targetElement.closest('[data-parent]')) {
			const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;		
			const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
			if (subMenu) {
				document.documentElement.classList.add('sub-menu-open');
				subMenu.classList.add('_sub-menu-open');
				// targetElement.closest('.popup__content').classList.add('_overflow-x')
			}
		}
		if(targetElement.closest('.submenu-filter__top')){
			document.documentElement.classList.remove('sub-menu-open');
			targetElement.closest('[data-submenu]').classList.remove('_sub-menu-open');
			// targetElement.closest('.popup__content').classList.remove('_overflow-x')
		}

		//раскрашиваю кнопку выбора категории фильтра при выбранном варианте в сабменю в моб версии
		if(window.innerWidth < 768 && (targetElement.closest('.options__input') || targetElement.closest('.checkbox__input'))) {
			let numberSubmenu = targetElement.closest('.filtmodal__submenu').dataset.submenu;
			// console.log(numberSubmenu);
			const buttonEl = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item')
			const checked = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item').querySelector('.filtmodal__checked')
			// console.log(buttonEl);
			buttonEl.classList.toggle('_backcolor');
			checked.innerHTML = targetElement.value;
		}
	}
});

//Работа с табами на главной странице под банером
if (window.innerWidth < 768 ) {
	const tabs01 = document.querySelector('#tabs01');
	const tabs02 = document.querySelector('#tabs02');
	tabs01 ? tabs01.classList.remove('_tab-active') : null;
	tabs02 ? tabs02.classList.add('_tab-active') : null;
}

//Преобразование фильтров-спойлеров в каталоге в таблетном разрешении
const catalog = document.querySelector('.catalog');
if(catalog) {
	const details = catalog.querySelectorAll('details');
	// const reset = catalog.querySelectorAll('.filter__reset')
	const spollersWrapper = catalog.querySelector('[data-spollers]')
	const summury = catalog.querySelectorAll('.filter__title-wrapper')
	let filterList = catalog.querySelectorAll('.filter__list')
	// reset.forEach(element => {
	// 		element.remove()
	// 	});
	if (window.innerWidth < 1001) {
		details.forEach(element => {
			element.removeAttribute('data-open');
		});
		
		spollersWrapper.setAttribute('data-one-spoller','')
		summury.forEach(element => {
			element.setAttribute('data-spoller-close','')
		});
	}
}

//позиционирование хлебных крошек при уменьшении экрана
const breadcrumbs = document.querySelector('.breadcrumbs__list')
	if(breadcrumbs) {
		if (breadcrumbs.offsetLeft + breadcrumbs.clientWidth > window.innerWidth) {
			console.log(breadcrumbs.offsetLeft + breadcrumbs.clientWidth);
			breadcrumbs.classList.add('_align-right')
		} else {
			breadcrumbs.classList.remove('_align-right')
		}
	}

// делаю доступной прокрутку, если высота окна меньше высоты попапа в меню фильтов в моб. версии
const popupFiltmodal = document.querySelector('.popup__body.filtmodal');
const popupContent = popupFiltmodal ? popupFiltmodal.closest('.popup__content') : null;
// console.log(popupFiltmodal);
// console.log(popupFiltmodal.clientHeight);
// console.log(window.innerHeight);
if(popupFiltmodal && (popupFiltmodal.clientHeight > window.innerHeight)) {
	popupContent.classList.add('_overflow-y')
}
