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
		if (targetElement.closest('.menu__link') && targetElement.closest('header')) {
			targetElement.classList.toggle('_open');
			targetElement.closest('.menu__item').classList.toggle('_menu__item-active');
			targetElement.closest('.menu__item').querySelector('.menu__sublist').classList.toggle('_sub-menu-open');
		}
		// закрытие меню бургер вне клика по меню
		if (!targetElement.closest('.menсu__icon') && !targetElement.closest('.menu__body') && flag == true) {
			flag = false;
		} else if(!targetElement.closest('.menсu__icon') && !targetElement.closest('.menu__body') && flag == false) {
			flag = true;
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

		//Показать - скрыть пароль
		if (targetElement.closest('.popup-img-toggle') /*&& flag == true*/) {
			const type = targetElement.closest('.popup__input-wrapper').querySelector('input').getAttribute("type") === "password" ? "text" : "password";
         targetElement.closest('.popup__input-wrapper').querySelector('input').setAttribute("type", type);
		}

		//Поднятие плейсхолдера в модальных окнах на место заголовка при фокусе на инпут
		if (targetElement.closest('input') || targetElement.closest('textarea')) {
			targetElement.closest('.popup__form-item') ? targetElement.closest('.popup__form-item').classList.add('_label-up') : null
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
			console.log(subMenu);
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
			valCheck.innerHTML = ' '
			
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
				// console.log(2);
				element.classList.remove('_question-answer')
			});
			// console.log(3);
			targetElement.closest('.question-block__answers').classList.add('_question-active');
			targetElement.classList.add('_question-answer');
			if (targetElement.closest('.questiion-block__span-quantity')) {
				targetElement.closest('.question-block__button').classList.add('_question-answer');
			}
		}

		//Уход заголовка при наведении на поле "Написать отзыв"
		// if(targetElement.closest('.comment__textarea')) {
		// 	targetElement.closest('#store-review').querySelector('.popup__reg-top').classList.add('_to-top')
		// }
		// if(targetElement.closest('.comment__textarea') && !targetElement.closest('.comment__textarea')) {
		// 	targetElement.closest('#store-review').querySelector('.popup__reg-top').classList.remove('_to-top')
		// }

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

		// if(targetElement.closest('.panel-comment__item') && targetElement.closest('.panel-comment__item').classList.contains('_filter-item-open')){
			
		// }

		if(!targetElement.closest('.panel-comment__item') && !targetElement.closest('.panel-comment__list')){
			const panelCommentItems = document.querySelectorAll('.panel-comment__item')
			panelCommentItems.forEach(element => {
				element.classList.remove('_filter-item-open')
			}); 
		}

		// Счётчик символов в textarea на странице "отзыв о магазине"
		if (targetElement.closest('textarea')) {
			if (targetElement.closest('.popup__form-item')) {
				const taComments = targetElement.closest('.popup__form-item').querySelector('textarea') // textarea
				const counter = targetElement.closest('.popup__form-item').querySelector('.comment__number-symbols') // счётчик
				taComments ? taComments.addEventListener('input', onInput) : null
				function onInput(evt) {
				const length = evt.target.value.length
				counter.textContent = length
				}
			}
		}

		//ОТкрытие скрытие списка номеров заказа в модальном окне: "отзыв о товаре"
		if (targetElement.closest('#number-order')) {
			targetElement.closest('.popup__form-item').querySelector('.popup__submenu').classList.toggle('_popup-submenu-open')
		}
		//Присвоение значения пункта сабменю в значение инпута
		const inputOrder = document.getElementById('number-order')
		if (targetElement.closest('.popup__submenu-item')) {
			inputOrder.value = targetElement.closest('.popup__submenu-item').innerText;
		}

		//Страница сертификаты. Меню кнопку с "купить" на "перейти к оформлению"
		if (targetElement.closest('.product__seil')) {
			targetElement.closest('.tabs__product').classList.add('_arrange-sertificate')
		}

		//Закрытие сабменю номеров заказа в попапе
		if (!targetElement.closest('#number-order') && document.getElementById('number-order')) {
			if(inputOrder.closest('.popup__form-item').querySelector('.popup__submenu').classList.contains('_popup-submenu-open')) {
				console.log('12');
				inputOrder.closest('.popup__form-item').querySelector('.popup__submenu').classList.remove('_popup-submenu-open')
			}
		}

		//Скрытие/показ отзывов без фото / с фото
		if (targetElement.closest('#with-photo')) {
			const hidden = targetElement.closest('.reviews__body').querySelectorAll('.feedback')
			// console.log(hidden);
			hidden.forEach(element => {
				if (!element.querySelector('.feedback__photo')) {
					element.classList.toggle('_hidden-feedback')
				}
			});
		}

		if (targetElement.closest('.popup__img-close')) {
			targetElement.closest('.popup__photo-img').remove()
		}

		//Изменение строки позиции на странице товара.
		if (targetElement.closest('.carts-product__add')) {
			targetElement.closest('.string__item').classList.add('_string-active')
		}

		//Добавить новый список. Появление формы добавления списка
		if (targetElement.closest('.list-popup__button-top')) {
			targetElement.closest('.list-popup__top').classList.add('_actions-open')
		}

		//Добавить новый список. Отмена появления
		if (targetElement.closest('.cancellation')) {
			targetElement.closest('.list-popup__top').classList.remove('_actions-open')
		}

		//Добавить новый список. Создание строки в списке снизу
		if (targetElement.closest('.save-item')) {
			let inputAdd = targetElement.closest('.list-popup').querySelector('#add-list-item')
			// console.log(inputAdd.value);
			let popupList = targetElement.closest('.list-popup').querySelector('.list-popup__body');
			var liAdditemStar = document.createElement("li");
			popupList.appendChild(liAdditemStar);
			liAdditemStar.classList.add('list-popup__item');
			liAdditemStar.innerHTML =
				`
				<div class="checkbox">
					<input id="add_${targetElement.closest('.list-popup').querySelector('.list-popup__body').getElementsByTagName("li").length}" data-error="Ошибка" class="checkbox__input"
						type="checkbox" value="Chanel" name="form[]">
					<label for="add_${targetElement.closest('.list-popup').querySelector('.list-popup__body').getElementsByTagName("li").length}" class="checkbox__label">
						<span class="checkbox__body "></span>
						<span class="checkbox__text">${inputAdd.value}</span>
					</label>
				</div>
				`
				inputAdd.value =''
		}

		// Графики цен открываю, скрываю
		if (targetElement.closest('.tabs-graph')) {
			const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
			const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
			const graphs = targetElement.closest('.tabs__navigation').querySelectorAll('.tabs-graph')
			graphs.forEach(element => {
				element.classList.remove('_tab-active');
			});
			targetElement.classList.add('_tab-active');
			const asd = targetElement.closest('.graph-popup__tabs').querySelectorAll('.tabs__body')
			asd.forEach(element => {
				element.classList.remove('_sub-menu-open');
			});
			subMenu.classList.add('_sub-menu-open');
		}

		//КОРЗИНА ФУНКЦИОНАЛ ДЛЯ СТРАНИЦЫ ТОВАРА
		if (targetElement.closest('.carts-product__add') || targetElement.closest('.quantity__button--plus')) {
			
			const productId = targetElement.closest('.string__item').dataset.pid;
			updateCart(targetElement, productId, true);
			e.preventDefault();
		}
		if (targetElement.closest('.carts-product__add')){
			document.querySelector('.cart').classList.add('_cart-active')
			let inputProductValue = targetElement.closest('.string__item').querySelector('input')
			inputProductValue.value = '1'
		}

		if (targetElement.closest('.basket__link') && document.querySelector('.actions-header__empty._hidden')) {
			targetElement.closest('.actions-header__item_cart').querySelector('.cart').classList.toggle('_cart-active')
		} else if (document.querySelector('._cart-active') && !targetElement.closest('.cart') && !targetElement.closest('.carts-product__add') && !targetElement.closest('.quantity')) {
			document.querySelector('.cart').classList.remove('_cart-active')
		}

		if ((targetElement.classList.contains('cart-list__delete') /*|| targetElement.closest('.quantity__button--minus')*/) && document.querySelector('.cart-list__item')) {
			// const productId = targetElement.closest('.wrapper').querySelector('.cart-list__item').dataset.cartPid;
			const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
			console.log(productId);
			updateCart(targetElement, productId, false);
			e.preventDefault();
		}

		if (targetElement.closest('.quantity__button--minus')) {
			const productId = targetElement.closest('.string__item').dataset.pid;
			console.log(productId);
			updateCart(targetElement, productId, false);
			e.preventDefault();
		}

		if(targetElement.classList.contains('cart-list__deleteproduct')){
			const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
			// let inputProductValue = targetElement.closest('.string__item').querySelector('input')
			// inputProductValue.value = '1'
			deleteproduct(targetElement, productId);
			e.preventDefault();
		}

		if(targetElement.classList.contains('actions-header__deleteall')){
			e.preventDefault();
			deleteAll();
		}
	}
});

function updateCart(productButton, productId, productAdd = true) {
	const cartWrapper =document.querySelector('.cart')
	const cart = document.querySelector('.actions-header__item_cart');
	const cartIcon = cart.querySelector('.basket__link');
	const cartQuantity = cartIcon.querySelector('span._quantity');
	const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
	const cartList = document.querySelector('.cart-list');

	//Добавляем
	if (productAdd) {
		if (cartQuantity) {
			cartQuantity.innerHTML = ++cartQuantity.innerHTML;
			
		} else {
			document.querySelector('.actions-header__empty').classList.add('_hidden')
			cartIcon.insertAdjacentHTML('beforeend', `<span class="_quantity">1</span>`);
		}
		if (!cartProduct) {
			const product = document.querySelector(`[data-pid="${productId}"]`);
			const cartProductImage = product.querySelector('.string__photo').innerHTML;
			const code = product.querySelector('.details-string__code').innerHTML;
			const brand = document.querySelector('.otliv__title > span').innerHTML;
			const gender = document.querySelector('._button-active').innerHTML;
			const type = product.querySelector('.details-string__type').innerHTML;
			const cartProductTitle = product.querySelector('.details-string__name').innerHTML;
			const costProduct = product.querySelector('.price-block__actual > span').innerHTML;
			const deleteCart = document.querySelector('.cart__wrapper');
			const cartProductContent = `
		<a href="" class="cart-list__image">${cartProductImage} <div class="cart-list__quantity"><span>1</span> <span>шт.</span></div></a>
		<div class="cart-list__body">
			<p class="cart-list__code details-string__code">${code}</p>
			<p class="cart-list__brand">${brand}</p>
			<p class="cart-list__gender">${gender}</p>
			<p class="cart-list__type details-string__type">${type}</p>
			<p class="cart-list__title">${cartProductTitle}</p>
			<p class="cart-list__cost">${costProduct}</p>
			<div class="cart-list__del">
				<button class="cart-list__delete">Уменьшить</button>
				<button class="cart-list__deleteproduct">Удалить всё</button>
			</div>
		</div>`;
			cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
			const delet = document.querySelector('.actions-header__deleteall');
			
			if(!delet){
				deleteCart.insertAdjacentHTML('beforeend', `<button class=actions-header__deleteall>Очистить корзину</button>`)
			}
		} else {
			const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
			cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
			let inputProductValue = cartProduct.closest('.wrapper').querySelector(`[data-pid="${productId}"] input`);
			inputProductValue.value = ++inputProductValue.value
		}
	} else {
		const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
			let inputProductValue = cartProduct.closest('.wrapper').querySelector(`[data-pid="${productId}"] input`);
			inputProductValue.value = --inputProductValue.value
			cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
			if (!parseInt(cartProductQuantity.innerHTML)) {
				cartProduct.closest('.wrapper').querySelector(`[data-pid="${productId}"]`).classList.remove('_string-active')
				cartProduct.remove();
				if (document.querySelector('.cart-list').children.length == 0) {
					cartWrapper.classList.remove('_cart-active');
					document.querySelector('.actions-header__empty').classList.remove('_hidden')
				}
			}

		const cartQuantityValue = --cartQuantity.innerHTML;

		if (cartQuantityValue) {
			cartQuantity.innerHTML = cartQuantityValue;
		} else {
			cartQuantity.remove();
			cart.classList.remove('_active');
		}
	}
}

function deleteproduct(targetElement, productId){
	const cartWrapper =document.querySelector('.cart')
	const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
	const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
	const cartQuantity = document.querySelector('.basket__link ._quantity');
	// const ulcart = document.querySelector('.actions-header__basket')


	let inputProductValue = cartProduct.closest('.wrapper').querySelector(`[data-pid="${productId}"] input`);
	inputProductValue.value = '1'


	cartProductQuantity.remove();
	cartQuantity.innerHTML = cartQuantity.innerHTML - cartProductQuantity.innerHTML;
	if(!parseInt(cartQuantity.innerHTML)){
		cartQuantity.remove();
		// ulcart.classList.remove('_active')
	}

	cartProduct.closest('.wrapper').querySelector(`[data-pid="${productId}"]`).classList.remove('_string-active')
	cartProduct.remove();
	// console.log();
	if (document.querySelector('.cart-list').children.length == 0) {
		cartWrapper.classList.remove('_cart-active');
		document.querySelector('.actions-header__empty').classList.remove('_hidden')
	}
}


function deleteAll(){
	const cartWrapper =document.querySelector('.cart')
	const cartQuantity = document.querySelector('.basket__link ._quantity');
	// const ulcart = document.querySelector('.actions-header__basket');
	const cartProduct = document.querySelectorAll('.string__item');
	const liItem = document.querySelectorAll('.cart-list__item')
	
	let inputProductValue = cartQuantity.closest('.wrapper').querySelectorAll('.string__item input');
	inputProductValue.forEach(element => {
		element.value = '1'
	});

	cartProduct.forEach(element => {
		element.classList.remove('_string-active')
	});

	cartQuantity.remove();
	for (var i = 0; i < liItem.length; i++) {
		liItem[i].remove();
	}
	
	// ulcart.classList.remove('_active');
	cartWrapper.classList.remove('_cart-active')
	document.querySelector('.actions-header__empty').classList.remove('_hidden')
};




document.addEventListener("DOMContentLoaded", () => {
	
/*===========================================================*/

	//Работа с табами на главной странице под банером
	
	const secondTabs = document.querySelector('#secondTabs')
	if (window.innerWidth < 768 && secondTabs) {
		const tabs01 = document.querySelector('#tabs01');
		const tabs02 = document.querySelector('#tabs02');
		tabs01 ? tabs01.classList.remove('_tab-active') : null;
		secondTabs ? secondTabs.hidden = false: null;
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
	
	if (popupFiltmodal && (popupFiltmodal.clientHeight > window.innerHeight - 120)) {
		popupContent.classList.add('_overflow-y')
	}

	const searchMob = document.querySelector('.search-mob')
	const headerDropMobile = searchMob.querySelector('.dropmenu')
	headerDropMobile.style.top = `${searchMob.clientHeight}`+ 'px';

	// Появление ссылки "Читать полностью" в мобильной версии на странице "Отзывы о магазине"
	window.addEventListener('load', function () {
		if (window.innerWidth < 768 && document.querySelector('.otlvant-review__spoller-title')) {
			const reviewsTitle = document.querySelector('.otlvant-review__spoller-title')
			reviewsTitle.addEventListener('click', writeFull )
			} else {
				writeFullSet()
			}
			function writeFull () {
				setTimeout(writeFullSet, 100);
			}
		function writeFullSet() {
			const feedBackWrapper = document.querySelectorAll('.feedback__text-wrapper');
			feedBackWrapper.forEach(element => {
				const feedBackText = element.querySelector('.feedback__text')
				
				if(element.clientHeight + 5 < feedBackText.clientHeight) {
					// console.log(1);
					element.closest('.feedback__content').querySelector('.feedback__write').classList.add('_open-write')
				}
			})
		}
	});

	// Счётчик символов в textarea на странице "отзыв о магазине"
	const taComments = document.querySelector('.comment__textarea') // textarea
	const counter = document.querySelector('.comment__number-symbols') // счётчик

	taComments ? taComments.addEventListener('input', onInput) : null

	function onInput(evt) {
	const length = evt.target.value.length
	counter.textContent = length
	}

	//Отзывы о товаре. Копирование текстового содержимогов табы из главной секции 
	const partReview1 = document.querySelector('.part-review1')
	const partReview1Tab = document.querySelector('.part-review1-tab')
	const partReview2 = document.querySelector('.part-review2')
	const partReview2Tab = document.querySelector('.part-review2-tab')
	const partReview3 = document.querySelector('.part-review3')
	const partReview3Tab = document.querySelector('.part-review3-tab')
	const partReview4 = document.querySelector('.part-review4')
	const partReview4Tab = document.querySelector('.part-review4-tab')

	partReview1Tab ? partReview1Tab.innerHTML = partReview1.innerHTML : null
	partReview2Tab ? partReview2Tab.innerHTML = partReview2.innerHTML : null
	partReview3Tab ? partReview3Tab.innerHTML = partReview3.innerHTML : null
	partReview4Tab ? partReview4Tab.innerHTML = partReview4.innerHTML : null

	//Скрытие записи "Развернуть описание" на странице товара. 
	const productReview = document.querySelector('.description-product__content');
	const writeFull = document.querySelector('.feedback__write');
	if (productReview && productReview.clientHeight <= 300) {
		writeFull.style.display = 'none'
	}
	//Опускаю подсказку про поиск позиции на странице товара
	const pozSearch = document.querySelector('.string__item_search');
	const hint = document.querySelector('.string__hint');
	
	if(pozSearch && hint) {
		hint.style.top = pozSearch.offsetTop + pozSearch.clientHeight / 2 + 'px'
	}

	//Создаю отступ справа у блока позиций, если позиций много
	const pozContainer = document.querySelector('.string');
	if (pozContainer) {
		const pozitions = pozContainer.querySelectorAll('.string__item')
		// console.log(pozContainer.clientHeight);
		let pozitionsHeight = 0
		pozitions.forEach(element => {
			pozitionsHeight += element.clientHeight + 10
		});
		// console.log(pozitionsHeight-10);
		if (pozitionsHeight-10 > pozContainer.clientHeight) {
			pozContainer.style.paddingRight = '5px'
		}
	}

	//Всплывашка при наведении "Корзина пуста"
	const basket = document.querySelector('.basket__link')
	if (basket && basket.closest('.actions-header__item_cart').querySelector('.cart__list').innerHTML=='') {
		basket.addEventListener("mousemove", EmptyMove);
		function EmptyMove () {
			basket.querySelector('.actions-header__empty').classList.add('_no-hidden')
		}
		basket.addEventListener("mouseleave", EmptyLeave);
		function EmptyLeave () {
			basket.querySelector('.actions-header__empty').classList.remove('_no-hidden')
		}
	}
	
});


