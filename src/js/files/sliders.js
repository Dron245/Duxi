/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
	
//Список слайдеров
//Проверяем, есть ли слайдер на странице
	if (document.querySelector('.banners__slider')) { //Указываем класс нужного слайдера
//Создаем слайдер
		new Swiper('.banners__slider', { //Указываем класс нужного слайдера
            //Подключаем модули слайдера
            //для конкретного случая
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop:true,
			autoplay: {
				delay: 5000,
			 },
			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.tabs__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
				new Swiper('.tabs__slider', { //Указываем класс нужного слайдера
						//Подключаем модули слайдера
						//для конкретного случая
					modules: [Navigation,Pagination, Autoplay],
					observer: true,
					observeParents: true,
					slidesPerView: 6,
					spaceBetween: 20,
					//autoHeight: true,
					speed: 800,
					// loop:true,
				
					// Пагинация
					
					pagination: {
						el: '.swiper-products-pagination',
						clickable: true,
					},
		
					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.swiper-tabs-prev',
						nextEl: '.swiper-tabs-next',
					},
					
					// Брейкпоинты
					breakpoints: {
						300: {
							slidesPerView: 1,
							spaceBetween: 20,
							// autoHeight: true,
						},
						360: {
							slidesPerView: 2,
							spaceBetween: 20,
							// autoHeight: true,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 26,
						},
						1001: {
							slidesPerView: 5,
							spaceBetween: 26,
						},
						// 1280: {
						// 	slidesPerView: 6,
						// 	spaceBetween: 20,
						// },
						1680: {
							slidesPerView: 6,
							spaceBetween: 20,
						},
					},
					
					// События
					on: {
		
					}
				});
	}

	if (document.querySelector('.video__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
				new Swiper('.video__slider', { //Указываем класс нужного слайдера
						//Подключаем модули слайдера
						//для конкретного случая
					modules: [Navigation,Pagination],
					observer: true,
					observeParents: true,
					slidesPerView: 3,
					spaceBetween: 20,
					// autoHeight: true,
					speed: 800,
					loop:true,

					// Пагинация
					
					pagination: {
						el: '.swiper-video-pagination',
						clickable: true,
					},
		
					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.swiper-video-prev',
						nextEl: '.swiper-video-next',
					},
					
					// Брейкпоинты
					breakpoints: {
						300: {
							slidesPerView: 1,
							spaceBetween: 20,
							// autoHeight: true,
						},
						360: {
							slidesPerView: 1.3,
							spaceBetween: 17,
							// autoHeight: true,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1001: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						
					},
				
				});
	}
}


//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();

	//Слайдер "скидки и акции на главной"
	if(document.querySelector('.page__products')){
		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
	
		breakpoint = window.matchMedia(breakpoint);
	
		const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);
	
		  if (callback) {
			 callback(swiper);
		  }
		}
	
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
	
		breakpoint.addEventListener('change', checker);
		checker();
	 }
	
	 resizableSwiper(
		'(max-width: 767.98px)',
		'.discounts__slider',
		{
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			// slidesPerView: 1.7,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			
			// Пагинация
			
			pagination: {
				el: '.swiper-discount-pagination',
				clickable: true,
			},
			
			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1.15,
					spaceBetween: 20,
					// autoHeight: true,
				},
				
			},
		},
		// someFunc
	  );
	}

	//Статья. Полезные статьи
	if(document.querySelector('.points')){
		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
	
		breakpoint = window.matchMedia(breakpoint);
	
		const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);
	
		  if (callback) {
			 callback(swiper);
		  }
		}
	
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
	
		breakpoint.addEventListener('change', checker);
		checker();
	 }
	
	 resizableSwiper(
		'(max-width: 767.98px)',
		'.aside-point__content',
		{
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			// slidesPerView: 1.7,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			
			// Пагинация
			
			pagination: {
				el: '.aside-point__pagination',
				clickable: true,
			},
			
			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1.15,
					spaceBetween: 20,
					// autoHeight: true,
				},
				
			},
		},
		// someFunc
	  );
	}
	
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

