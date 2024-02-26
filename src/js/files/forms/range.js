// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение стилей с node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider01 = document.querySelector('#range01');
	const priceSlider02 = document.querySelector('#range02');
	const priceSlider01m = document.querySelector('#range01m');
	const priceSlider02m = document.querySelector('#range02m');

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
			document.getElementById('lower01'),
			document.getElementById('upper01')
		];
		priceSlider01.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].innerHTML = values[handle];
			document.querySelector('.filter__val-low1').innerHTML = document.getElementById('lower01').innerHTML
			document.querySelector('.filter__val-max1').innerHTML = document.getElementById('upper01').innerHTML
		});
	}

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
			document.getElementById('lower02'),
			document.getElementById('upper02')
		];
		priceSlider02.noUiSlider.on('update', function (values, handle) {
			snapValues02[handle].innerHTML = values[handle];
			document.querySelector('.filter__val-low2').innerHTML = document.getElementById('lower02').innerHTML
			document.querySelector('.filter__val-max2').innerHTML = document.getElementById('upper02').innerHTML
		});
	}

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

		// console.log(priceSlider01m.closest('.range').querySelector('#upper01m'));
		var snapValues01m = [
			document.getElementById('lower01m'),
			document.getElementById('upper01m'),
			// document.querySelector('.filtmodal__checked-min-01m'),
			// document.querySelector('.filtmodal__checked-max-01m'),
		];
		priceSlider01m.noUiSlider.on('update', function (values, handle) {
			snapValues01m[handle].innerHTML = values[handle];
			document.querySelector('.filtmodal__checked-min-01m').innerHTML = document.getElementById('lower01m').innerHTML
			document.querySelector('.filtmodal__checked-max-01m').innerHTML = document.getElementById('upper01m').innerHTML
		});
	}

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
			document.getElementById('lower02m'),
			document.getElementById('upper02m'),

		];
		priceSlider02m.noUiSlider.on('update', function (values, handle) {
			snapValues02m[handle].innerHTML = values[handle];
			document.querySelector('.filtmodal__checked-min-02m').innerHTML = document.getElementById('lower02m').innerHTML
			document.querySelector('.filtmodal__checked-max-02m').innerHTML = document.getElementById('upper02m').innerHTML
		});
	}
	document.addEventListener("click", documentActionsRange);

	function documentActionsRange(e) {
		const targetEl = e.target
		if (targetEl.closest('.filter__reset') && targetEl.closest('.filters__filter').querySelector('.range__slider')) {
			targetEl.closest('.filters__filter').querySelector('.range__slider').noUiSlider.reset();
		}

		if (targetEl.closest('#reset-filternoUi')) {
			// console.log(123);
			targetEl.closest('.filtmodal__submenu').querySelector('.range__slider').noUiSlider.reset();
		}
	}
}
rangeInit();




