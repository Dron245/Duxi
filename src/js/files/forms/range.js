// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение стилей с node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider01 = document.querySelector('#range01');
	const priceSlider02 = document.querySelector('#range02');
	if (priceSlider01) {
		noUiSlider.create(priceSlider01, {
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
			document.getElementById('lower01'),
			document.getElementById('upper01')
		];
		priceSlider01.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].innerHTML = values[handle];
		});
	}
	if (priceSlider02) {
		noUiSlider.create(priceSlider02, {
			start:  [20,100],
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
		
		var snapValues = [
			document.getElementById('lower02'),
			document.getElementById('upper02')
	  ];
	  priceSlider02.noUiSlider.on('update', function (values, handle) {
		snapValues[handle].innerHTML = values[handle];
	});
	}
}
rangeInit();
