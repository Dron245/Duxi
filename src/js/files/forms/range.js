// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение стилей с node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider01 = document.querySelector('#range01');
	const priceSlider02 = document.querySelector('#range02');
	const priceSlider01Adv = document.querySelector('#range01-adv');
	const priceSlider02Adv = document.querySelector('#range02-adv');
	const priceSlider01m = document.querySelector('#range01m');
	const priceSlider02m = document.querySelector('#range02m');

	//планшет цена каталог
	if (priceSlider01) {
		noUiSlider.create(priceSlider01, {
			start: [30000, 130000],
			connect: [false, true, false],
			range: {
				'min': [0],
				'max': [200000]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		var snapValues = [
			priceSlider01.closest('.range').querySelector('#lower-cost'),
			priceSlider01.closest('.range').querySelector('#upper-cost')
		];
		priceSlider01.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].innerHTML = values[handle];
			priceSlider01.closest('.filter').querySelector('.filter__val-low').innerHTML = priceSlider01.closest('.filter__body').querySelector('#lower-cost').innerHTML
			priceSlider01.closest('.filter').querySelector('.filter__val-max').innerHTML = priceSlider01.closest('.filter__body').querySelector('#upper-cost').innerHTML
		});
	}

	//планшет объём каталог
	if (priceSlider02) {
		noUiSlider.create(priceSlider02, {
			start: [60, 150],
			connect: [false, true, false],
			range: {
				'min': [10],
				'max': [200]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		var snapValues02 = [
			priceSlider02.closest('.range').querySelector('#lower-volume'),
			priceSlider02.closest('.range').querySelector('#upper-volume')
		];
		priceSlider02.noUiSlider.on('update', function (values, handle) {
			snapValues02[handle].innerHTML = values[handle];
			priceSlider02.closest('.filter').querySelector('.filter__val-low').innerHTML = priceSlider02.closest('.filter__body').querySelector('#lower-volume').innerHTML
			priceSlider02.closest('.filter').querySelector('.filter__val-max').innerHTML = priceSlider02.closest('.filter__body').querySelector('#upper-volume').innerHTML
		});
	}

	//Поиск полная версия цена
	if (priceSlider01Adv) {
		noUiSlider.create(priceSlider01Adv, {
			start: [30000, 160000],
			connect: [false, true, false],
			range: {
				'min': [0],
				'max': [200000]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		var snapValues01Adv = [
			priceSlider01Adv.closest('.range').querySelector('#lower-cost'),
			priceSlider01Adv.closest('.range').querySelector('#upper-cost')
		];
		priceSlider01Adv.noUiSlider.on('update', function (values, handle) {
			snapValues01Adv[handle].innerHTML = values[handle];
			priceSlider01Adv.closest('.filter').querySelector('.filter__val-low').innerHTML = priceSlider01Adv.closest('.filter__body').querySelector('#lower-cost').innerHTML
			priceSlider01Adv.closest('.filter').querySelector('.filter__val-max').innerHTML = priceSlider01Adv.closest('.filter__body').querySelector('#upper-cost').innerHTML
		});
	}

	//Поиск полная версия объём
	if (priceSlider02Adv) {
		noUiSlider.create(priceSlider02Adv, {
			start: [40, 160],
			connect: [false, true, false],
			range: {
				'min': [10],
				'max': [200]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		var snapValues02Adv = [
			priceSlider02Adv.closest('.range').querySelector('#lower-volume'),
			priceSlider02Adv.closest('.range').querySelector('#upper-volume')
		];
		priceSlider02Adv.noUiSlider.on('update', function (values, handle) {
			snapValues02Adv[handle].innerHTML = values[handle];
			priceSlider02Adv.closest('.filter').querySelector('.filter__val-low').innerHTML = priceSlider02Adv.closest('.filter__body').querySelector('#lower-volume').innerHTML
			priceSlider02Adv.closest('.filter').querySelector('.filter__val-max').innerHTML = priceSlider02Adv.closest('.filter__body').querySelector('#upper-volume').innerHTML
		});
	}

	//мобилка попап цена каталог
	if (priceSlider01m) {
		noUiSlider.create(priceSlider01m, {
			start: [30000, 130000],
			connect: [false, true, false],
			range: {
				'min': [0],
				'max': [200000]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		var snapValues01m = [
			priceSlider01m.closest('.submenu-filter__list').querySelector('#lower-cost'),
			priceSlider01m.closest('.submenu-filter__list').querySelector('#upper-cost')
		];

		priceSlider01m.noUiSlider.on('update', function (values, handle) {
			snapValues01m[handle].innerHTML = values[handle];
			priceSlider01m.closest('.popup__content').querySelector('.filtmodal-min').innerHTML = priceSlider01m.closest('.range').querySelector('#lower-cost').innerHTML
			priceSlider01m.closest('.popup__content').querySelector('.filtmodal-max').innerHTML = priceSlider01m.closest('.range').querySelector('#upper-cost').innerHTML
		});

		priceSlider01m.noUiSlider.on('change', function (values, handle) {
			snapValues01m[handle].innerHTML = values[handle];
			priceSlider01m.closest('.popup__content').querySelector('.filtmodal__item_cost').classList.add('_backcolor');
		});
	}
	//мобилка попап объём каталог
	if (priceSlider02m) {
		noUiSlider.create(priceSlider02m, {
			start: [60, 150],
			connect: [false, true, false],
			range: {
				'min': [10],
				'max': [200]
			},

			format: wNumb({
				decimals: 0,
				thousand: ' '
			})

		});

		
		var snapValues02m = [
			priceSlider02m.closest('.submenu-filter__list').querySelector('#lower-volume'),
			priceSlider02m.closest('.submenu-filter__list').querySelector('#upper-volume')
		];

		priceSlider02m.noUiSlider.on('update', function (values, handle) {
			snapValues02m[handle].innerHTML = values[handle];
			priceSlider02m.closest('.popup__content').querySelector('.filtmodal__item_volume .filtmodal-min').innerHTML = priceSlider02m.closest('.range').querySelector('#lower-volume').innerHTML
			priceSlider02m.closest('.popup__content').querySelector('.filtmodal__item_volume .filtmodal-max').innerHTML = priceSlider02m.closest('.range').querySelector('#upper-volume').innerHTML
		});

		priceSlider02m.noUiSlider.on('change', function (values, handle) {
			snapValues02m[handle].innerHTML = values[handle];
			priceSlider02m.closest('.popup__content').querySelector('.filtmodal__item.filtmodal__item_volume').classList.add('_backcolor')
		});
	}
	document.addEventListener("click", documentActionsRange);

	//сброс к дефолту
	function documentActionsRange(e) {
		const targetEl = e.target
		if (targetEl.closest('.filter__reset') && targetEl.closest('.filters__filter').querySelector('.range__slider')) {
			targetEl.closest('.filters__filter').querySelector('.range__slider').noUiSlider.reset();
		}

		if (targetEl.closest('#reset-filternoUi')) {
			targetEl.closest('.filtmodal__submenu').querySelector('.range__slider').noUiSlider.reset();
		}

		//сбрасываю noUi ползунки при нажатии на общую кнопку "сбросить всё" в мобилке в фильтрах каталога
		if (targetEl.closest('#reset-filterall')) {
			const noUirange = document.querySelectorAll('.range__slider')
			noUirange.forEach(element => {
				element.noUiSlider.reset()
			});
		}
	}
}
rangeInit();




