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
		if(window.innerWidth < 1001 && targetElement.closest('.options__input')) {
			console.log(targetElement);
			let inp = targetElement.value;
			let val = targetElement.closest('.filters__item').querySelector('.filter__val')
			console.log(val.innerHTML);
			console.log(inp);
			val.innerHTML = inp;
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
	const reset = catalog.querySelectorAll('.filter__reset')
	const spollersWrapper = catalog.querySelector('[data-spollers]')
	const summury = catalog.querySelectorAll('.filter__title-wrapper')
	if (window.innerWidth < 1001) {
		details.forEach(element => {
			element.removeAttribute('data-open');
		});
		reset.forEach(element => {
			element.remove()
		});
		spollersWrapper.setAttribute('data-one-spoller','')
		summury.forEach(element => {
			element.setAttribute('data-spoller-close','')
		});
	}
}



// const mobileWidthMediaQuery = window.matchMedia('(max-width: 767.98px)')

// function qwe () {
// 	if (mobileWidthMediaQuery.matches) {
// 		// btabs01.classList.remove('_tab-active')
// 		btabs03.classList.remove('_tab-active')
// 		btabs02.classList.add('_tab-active')
// 		document.querySelector('.tabs02').hidden = false
// 		document.querySelector('.tabs03').hidden = true
// 	 } else {
// 		// btabs01.classList.add('_tab-active')
// 		// btabs02.classList.remove('_tab-active')
// 		// btabs03.classList.remove('_tab-active')
// 		// document.querySelector('.tabs02').hidden = true
// 		// document.querySelector('.tabs03').hidden = true
// 		// document.querySelector('.tabs01').hidden = false
// 	 }
// }

//  mobileWidthMediaQuery.addEventListener('change', qwe)

//  const mobileWidthMediaQuery = window.matchMedia('(max-width: 420px)')

// function printLog(isMobileSize) {
//   const size = isMobileSize ? 'уже или равен' : 'шире'

//   console.log(`Размер экрана ${size} 420px`)
// }

// printLog(mobileWidthMediaQuery.matches)

// mobileWidthMediaQuery.addEventListener('change', function (event) {
//   printLog(event.matches)
// })
