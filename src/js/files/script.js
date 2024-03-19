// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener("click", documentActions);
	let flag = true;
	function documentActions(e) {
		const targetElement = e.target;

		console.log(targetElement);
		// Открытие сабменю в мобильной версии
		if (targetElement.closest('.menu__link')) {
			targetElement.classList.toggle('_open');
			targetElement.closest('.menu__item') ? targetElement.closest('.menu__item').classList.toggle('_menu__item-active') : null;
			targetElement.closest('.menu__item').querySelector('.menu__sublist') ? targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open') : null
		}
		// закрытие меню бургер вне клика по меню
		if (!targetElement.closest('.menu__icon') && !targetElement.closest('.menu__body')) {
			document.querySelector('.menu-open') ? document.documentElement.classList.remove('lock') : null
			document.querySelector('.menu-open') ? document.documentElement.classList.remove('menu-open') : null
		}

		// Закрытие/открытие окна "выбор города" при клике на кнопку "Да, всё верно"
		if (targetElement.closest('.city-choice__button')) {
			const city = targetElement.closest('.top-header__city').querySelector('.city-choice')
			city.hidden = true; return;
		}
		// выбор списка с городами
		if (targetElement.closest('.top-header__city') && document.querySelector('.guest') && document.querySelector('.city-choice').hidden) {
			const city = targetElement.closest('.top-header__city').querySelector('.city-choice')
			city.hidden = false; return;
		}
		//переключаю значок пароля с видеть на не видеть
		if (targetElement.closest('.popup__img-pasword')) {
			targetElement.closest('.popup__img-pasword').classList.toggle('_pass-view')
		}

		//Открытие/скрытие строки поиска
		if (targetElement.closest('.search-button')) {
			document.documentElement.classList.toggle('_show')
		}
		if (!targetElement.closest('.header-center__form')) {
			document.documentElement.classList.remove('_show')
		}

		//Присваивание текста выбранного варианта в спец окно в каталоге в таблетном разрешении у радиокнопок
		if (window.innerWidth < 1001 && (targetElement.closest('.options__input')) && targetElement.closest('.catalog')) {
			let inpOpt = targetElement.value;
			let valOpt = targetElement.closest('.filters__item').querySelector('.filter__val')
			valOpt.innerHTML = inpOpt;
		}

		//Присваивание текста выбранного варианта в спец окно в каталоге в таблетном разрешении у чекбоксов
		if (window.innerWidth < 1001 && targetElement.closest('.checkbox__input') && targetElement.closest('.catalog')) {
			// let inpCheck = targetElement.value;
			let valCheck = targetElement.closest('.filters__item').querySelector('.filter__val')
			// valCheck.innerHTML = inpCheck;
			if (flag) {
				flag = false;
				valCheck.innerHTML = " "
			}
			valCheck.innerHTML += targetElement.value + ", ";
		}

		// Устанавливаю нормальную высоту окна с чекбоксами в каталоге в таблетном разрешении.
		if (targetElement.closest('.filter__title') && targetElement.closest('.filters__item').querySelector('.checkbox')) {
			let list = targetElement.closest('.filters__item').querySelector('.filter__list')
			if (!list.closest('.filter__showmore').classList.contains('_showmore-active')) {
				list.style.height = '180px'
			}
		}

		// Связывание пунктов меню и саб-меню в фильрах в каталоге в мобильной версии
		if (targetElement.closest('[data-parent]')) {
			const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
			const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
			if (subMenu) {
				document.documentElement.classList.add('sub-menu-open');
				subMenu.classList.add('_sub-menu-open');
			}
		}
		if (targetElement.closest('.submenu-filter__top') || targetElement.closest('#submit-filter')) {
			document.documentElement.classList.remove('sub-menu-open');
			targetElement.closest('[data-submenu]').classList.remove('_sub-menu-open');
		}

		//страница "Поиск". Открытие результатов поиска по нажатию заголовка соответствующей рубрики.
		if (targetElement.closest('[data-but]')) {
			const buttonTilteSearch = document.querySelectorAll('.main-search__title');
			buttonTilteSearch.forEach(element => {
				element.classList.remove('_active-search-title')
			});
			targetElement.classList.add('_active-search-title')
			const parId = targetElement.closest('summary').dataset.but ? targetElement.closest('summary').dataset.but : null;
			const par = document.querySelector(`[data-par="${parId}"]`);
			// console.log(parId);
			// console.log(par);
			if (par) {
				const spo = document.querySelectorAll('.main-search__body')
				spo.forEach(element => {
					element.classList.remove('_open-result-search')
				});
				par.classList.add('_open-result-search')
			}
		}

		//раскрашиваю кнопку выбора категории фильтра при выбранном варианте у радио кнопок в сабменю в моб версии
		if (window.innerWidth < 768 && targetElement.closest('.options__input')) {
			let numberSubmenu = targetElement.closest('.filtmodal__submenu').dataset.submenu;
			const buttonEl = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item')
			const checked = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item').querySelector('.filtmodal__checked')
			buttonEl.classList.add('_backcolor');
			checked.innerHTML = targetElement.value;
		}

		//закрашивание звёздочки в избранном
		if(targetElement.closest('.product__favorite')) {
			targetElement.closest('.product__favorite').classList.toggle('_active-favorite')
		}

		//раскрашиваю кнопку выбора категории фильтра при выбранном варианте у чекбоксов в сабменю в моб версии
		if (window.innerWidth < 768 && targetElement.closest('.checkbox__input')) {
			let numberSubmenu = targetElement.closest('.filtmodal__submenu').dataset.submenu;
			const buttonEl = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item')
			const checked = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item').querySelector('.filtmodal__checked')
			buttonEl.classList.add('_backcolor');
			//Пытаюсь вбить выбранные варианты чекбоксов в подзаголовок коренного мобильного меню фильтров
			if (flag) {
				flag = false;
				checked.innerHTML = " "
			}
			checked.innerHTML += targetElement.value + ", ";
		}

		//сбрасываю noUislider в фильтрах выбора каталога в моб версии в
		// части удаления цвета бэкграунда у соответствующего пункта меню в корневом меню

		if (targetElement.closest('#reset-filternoUi')) {
			let numberSubmenu = targetElement.closest('.filtmodal__submenu').dataset.submenu;
			const buttonEl = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item')
			buttonEl.classList.remove('_backcolor');
		}

		//сбрасываю чекбоксы по нажатию кнопки "сбросить" и очищаю поле выбранного фильтра
		if (targetElement.closest('.filter__reset-check')) {
			let valCheck = targetElement.closest('.filters__filter').querySelector('.filter__val')
			console.log(valCheck);
			const checkboxCheck = targetElement.closest('.filters__filter').querySelectorAll('.checkbox__input')
			checkboxCheck.forEach(element => {
				element.checked = false
			});
			// if (valCheck.innerHTML == null) {
				valCheck.innerHTML = ' '
			// }
			
			// console.log(valCheck);
		}

		//сбрасываю чекбоксы по нажатию кнопки "сбросить" в саб меню мобилки и очищаю пдсказку в основном меню фильтров в мобилке
		if (targetElement.closest('#reset-filter')) {
			const checkboxCheckMobile = targetElement.closest('.filtmodal__submenu').querySelectorAll('.checkbox__input')
			checkboxCheckMobile.forEach(element => {
				element.checked = false;
			});
			let numberSubmenu = targetElement.closest('.filtmodal__submenu').dataset.submenu;
			// const buttonEl = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item')
			const checked = targetElement.closest('.filtmodal').querySelector(`[data-parent="${numberSubmenu}"]`).closest('.filtmodal__item').querySelector('.filtmodal__checked')
			checked.innerHTML = targetElement.value;
		}

		// очистка выбранных опций и снятие фона в основном меню фильтров в мобилке
		if (targetElement.closest('#reset-filterall')) {
			const checkeds = targetElement.closest('.filtmodal__wrapper ').querySelectorAll('.filtmodal__checked');
			const filtmodalItem = targetElement.closest('.filtmodal__wrapper').querySelectorAll('.filtmodal__item');
			
			//убираю подсказки в корневом меню модалка фильтры каталог
			checkeds.forEach(element => {
				element.innerHTML = ' ';
			});

			//убираю фон
			filtmodalItem.forEach(element => {
				element.classList.remove('_backcolor')
			});

			//сбрасываю чекбоксы во всех саб меню фильтрах
			const subCheks = targetElement.closest('.filtmodal').querySelectorAll('.checkbox__input')
			subCheks.forEach(element => {
				element.checked = false;
			});
		}

		//работа с подсказками
		if(window.innerWidth < 1001.98 && targetElement.closest('.filter__help')) {
			document.documentElement.classList.add('_tippy-open')
		}
		if(window.innerWidth < 1001.98 && !targetElement.closest('.filter__help')) {
			document.documentElement.classList.remove('_tippy-open')
		}
		
		//Открытие / закрытие поиска в мобильной версии в шапке
		if(window.innerWidth < 1001.98 && targetElement.closest('.header-center__input')) {
			document.querySelector('.header').classList.add('_mobile-searh-top-open')
		}
		if(window.innerWidth < 1001.98 && targetElement.closest('.search-mob__img-close')) {
			document.querySelector('.header').classList.remove('_mobile-searh-top-open')
		}

		//Открытие состояние заказа на странице "Отслеживание заказов"
		if(document.querySelector('.where') && targetElement.closest('.search-order')) {
			if(targetElement.closest('.calculation__form').querySelector('input').value.length != 0) {
				document.documentElement.classList.add('_show-order')
			}
		}

		//Открываю все данные по на странице "калькулятор" по нажатию кнопки "расчитать"
		if(document.querySelector('.calculator') && targetElement.closest('.form-calc__link')) {
			if(targetElement.closest('.calculation__form').querySelector('.form-calc__input_city').value.length != 0 && targetElement.closest('.calculation__form').querySelector('.form-calc__input_cost').value.length != 0) {
				document.documentElement.classList.add('_show-order')
			}
		}

		//Раскрашивание кнопок в зелёный или красный цвет при нажатии на ответ да или нет на странице "отзывы о магазине"
		if(targetElement.closest('.question-block__button') || targetElement.closest('.questiion-block__span-quantity')) {
			const questionAnswers= targetElement.closest('.question-block__answers').querySelectorAll('.question-block__button');
			console.log(questionAnswers);
			questionAnswers.forEach(element => {
				console.log(2);
				element.classList.remove('_question-answer')
			});
			console.log(3);
			targetElement.closest('.question-block__answers').classList.add('_question-active');
			targetElement.classList.add('_question-answer');
			if (targetElement.closest('.questiion-block__span-quantity')) {
				targetElement.closest('.question-block__button').classList.add('_question-answer');
			}
		}

		//Уход заголовка при наведении на поле "Написать отзыв"
		if(targetElement.closest('.comment__textarea')) {
			targetElement.closest('#store-review').querySelector('.popup__reg-top').classList.add('_to-top')
		}
		if(targetElement.closest('.comment__textarea') && !targetElement.closest('.comment__textarea')) {
			targetElement.closest('#store-review').querySelector('.popup__reg-top').classList.remove('_to-top')
		}

		//Открытие фильтров на странице "отзывы о магазине"
		//Изменение цвета заголовка в панели отзывов на странице "отзывы о магазине"

		if(targetElement.closest('.panel-comment__item') && !targetElement.closest('.panel-comment__item').classList.contains('_filter-item-open')){
			const panelCommentItems = document.querySelectorAll('.panel-comment__item')
			panelCommentItems.forEach(element => {
				if (element.classList.contains('_filter-item-open')) {
					element.classList.remove('_filter-item-open');
				}
			}); 
			targetElement.closest('.panel-comment__item').classList.add('_filter-item-open');
		} else if(targetElement.closest('.panel-comment__item') && targetElement.closest('.panel-comment__item').classList.contains('_filter-item-open')) {
			targetElement.closest('.panel-comment__item').classList.remove('_filter-item-open');
		}

		if(targetElement.closest('.panel-comment__item') && targetElement.closest('.panel-comment__item').classList.contains('_filter-item-open')){
			
		}

		if(!targetElement.closest('.panel-comment__item') && !targetElement.closest('.panel-comment__list')){
			const panelCommentItems = document.querySelectorAll('.panel-comment__item')
			panelCommentItems.forEach(element => {
				element.classList.remove('_filter-item-open')
			}); 
		}
	}

});













document.addEventListener("DOMContentLoaded", () => {
/*===========================================================*/

	//Работа с табами на главной странице под банером
	if (window.innerWidth < 768) {
		const tabs01 = document.querySelector('#tabs01');
		const tabs02 = document.querySelector('#tabs02');
		tabs01 ? tabs01.classList.remove('_tab-active') : null;
		tabs02 ? tabs02.classList.add('_tab-active') : null;
	}

	//Преобразование фильтров-спойлеров в каталоге в таблетном разрешении
	const catalog = document.querySelector('.catalog');
	if (catalog) {
		const details = catalog.querySelectorAll('details');
		const spollersWrapper = catalog.querySelector('aside [data-spollers]')
		const summury = catalog.querySelectorAll('.filter__title-wrapper')
		
		// console.log(spollersWrapper);
		if (window.innerWidth < 1001) {
			details.forEach(element => {
				element.removeAttribute('data-open');
			});
			spollersWrapper.setAttribute('data-one-spoller', '')
			summury.forEach(element => {
				element.setAttribute('data-spoller-close', '')
				element.classList.remove('_spoller-active')
			});
		}
	}

	//Преобразование фильтров-спойлеров в способах оплаты в мобильном разрешении
	const payment = document.querySelector('.payment');
	if(payment) {
		const details = payment.querySelectorAll('details');
		if (window.innerWidth < 768.02) {
			details.forEach(element => {
				element.removeAttribute('data-open');
			});
		}
	}

	//Преобразование спойлеров на странице "О магазине" в таблетном разрешении

	const store = document.querySelector('.store')
	if(store) {
		const details = store.querySelectorAll('details');
		if (window.innerWidth < 768.02) {
			details.forEach(element => {
				element.removeAttribute('data-open');
			});
			store.querySelector('.store-not-open').setAttribute('data-open', '')
		}
	}

	//позиционирование хлебных крошек при уменьшении экрана
	const breadcrumbs = document.querySelector('.breadcrumbs__list')
	if (breadcrumbs) {
		if (30 + breadcrumbs.clientWidth > window.innerWidth) {
			// console.log(breadcrumbs.offsetLeft + breadcrumbs.clientWidth);
			breadcrumbs.classList.add('_align-right')
		} else {
			breadcrumbs.classList.remove('_align-right')
		}
	}

	// делаю доступной прокрутку, если высота окна меньше высоты попапа в меню фильтов в моб. версии
	const popupFiltmodal = document.querySelector('.popup__body.filtmodal');
	const popupContent = popupFiltmodal ? popupFiltmodal.closest('.popup__content') : null;
	if (popupFiltmodal && (popupFiltmodal.clientHeight > window.innerHeight - 60)) {
		popupContent.classList.add('_overflow-y')
	}

	const searchMob = document.querySelector('.search-mob')
	const headerDropMobile = searchMob.querySelector('.dropmenu')
	headerDropMobile.style.top = `${searchMob.clientHeight}`+ 'px';

	// Появление ссылки "Читать полностью" в мобильной версии на странице "Отзывы о магазине"
	window.addEventListener('load', function () {
		const feedBackWrapper = document.querySelectorAll('.feedback__text-wrapper');
		feedBackWrapper.forEach(element => {
			const feedBackText = element.querySelector('.feedback__text')
		// console.log(element.clientHeight);
		// console.log(feedBackText.clientHeight);
		// console.log(feedBackText.clientTop);
		// console.log(feedBackText.getBoundingClientRect());
			if(element.clientHeight + 5 < feedBackText.clientHeight) {
				// console.log(1);
				element.closest('.feedback__content').querySelector('.feedback__write').classList.add('_open-write')
			}
		})
	});




// Счётчик символов в textarea на странице "отзыв о магазине"
const taComments = document.querySelector('.comment__textarea') // textarea
const counter = document.querySelector('.comment__number-symbols') // счётчик

taComments ? taComments.addEventListener('input', onInput) : null

function onInput(evt) {
const length = evt.target.value.length
counter.textContent = length
}

// import CanvasJS from '@canvasjs/charts';
// window.onload = function () {
// 	if(document.querySelector('#chartContainer')){
// 		var chart = new CanvasJS.Chart("chartContainer", {
// 			title:{
// 				text: "My First Chart in CanvasJS"              
// 			},
// 			data: [              
// 			{
// 				// Change type to "doughnut", "line", "splineArea", etc.
// 				type: "spline",
// 				dataPoints: [
// 					{ label: "apple",  y: 10  },
// 					{ label: "orange", y: 15  },
// 					{ label: "banana", y: 25  },
// 					{ label: "mango",  y: 30  },
// 					{ label: "grape",  y: 28  }
// 				]
// 			}
// 			]
// 		});
// 		chart.render();
// 	}
// }
 });













