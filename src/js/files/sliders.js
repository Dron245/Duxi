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
	var init = false;
	var discounts__slider;
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
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
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
					loop:true,
					//touchRatio: 0,
					//simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,
		
					
					// Эффекты
					// effect: 'fade',
					// autoplay: {
					// 	delay: 4000,
					// 	disableOnInteraction: false,
					// },
					
		
					// Пагинация
					
					pagination: {
						el: '.swiper-products-pagination',
						clickable: true,
					},
					
		
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
		
					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.swiper-product-prev',
						nextEl: '.swiper-product-next',
					},
					
					// Брейкпоинты
					breakpoints: {
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
						1280: {
							slidesPerView: 6,
							spaceBetween: 20,
						},
					},
					
					// События
					on: {
		
					}
				});
	}

	//Слайдер "скидки и акции на главной"
	function swiperCard() {
		let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768.97px)");
		if ( mobile.matches /*window.innerWidth <= 768*/ /* && document.querySelector('.discounts__slider')*/) { //Указываем класс нужного слайдера
			//Создаем слайдер
			if (!init) {
				init =true;
				discounts__slider = new Swiper('.discounts__slider', { //Указываем класс нужного слайдера
						//Подключаем модули слайдера
						//для конкретного случая
					modules: [Pagination, Autoplay],
					observer: true,
					observeParents: true,
					// slidesPerView: 1.7,
					spaceBetween: 20,
					// autoHeight: true,
					speed: 800,
					// loop:true,
					// touchRatio: 0,
					//simulateTouch: false,
					// loop: true,
					//preloadImages: false,
					//lazy: true,
		
					
					// Эффекты
					// effect: 'fade',
					// autoplay: {
					// 	delay: 4000,
					// 	disableOnInteraction: false,
					// },
					
		
					// Пагинация
					
					pagination: {
						el: '.swiper-discount-pagination',
						clickable: true,
					},
					
		
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
		
					// Кнопки "влево/вправо"
					// navigation: {
					// 	prevEl: '.swiper-product-prev',
					// 	nextEl: '.swiper-product-next',
					// },
					
					// Брейкпоинты
					breakpoints: {
						360: {
							slidesPerView: 1.05,
							spaceBetween: 20,
							// autoHeight: true,
						},
						
					},
					
					// События
					on: {
		
					}
				});
			} else if (init){
				discounts__slider.destroy();
				init = false;
			}
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);

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
					//touchRatio: 0,
					//simulateTouch: false,
					//loop: true,
					//preloadImages: false,
					//lazy: true,
		
					
					// Эффекты
					// effect: 'fade',
					// autoplay: {
					// 	delay: 4000,
					// 	disableOnInteraction: false,
					// },
					
		
					// Пагинация
					
					pagination: {
						el: '.swiper-video-pagination',
						clickable: true,
					},
					
		
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
		
					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.swiper-video-prev',
						nextEl: '.swiper-video-next',
					},
					
					// Брейкпоинты
					breakpoints: {
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
					
					// События
					on: {
		
					}
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
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});