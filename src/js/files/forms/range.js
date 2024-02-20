// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение стилей с node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start:  [100,15000],
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
			document.getElementById('lower'),
			document.getElementById('upper')
	  ];
	  
	  priceSlider.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].innerHTML = values[handle];
	  });

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		// priceStart.addEventListener('change', setPriceValues);
		// priceEnd.addEventListener('change', setPriceValues);
		
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}
}
rangeInit();
