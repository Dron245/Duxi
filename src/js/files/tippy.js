// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение с node_modules
import tippy from 'tippy.js';

// Подключение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение стилей с node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
// flsModules.tippy = tippy('[data-tippy-content]', {
// 	arrow: true,
// 	placement: 'right',
// 	content: '<div class="wrapper"><div class="top"><div class="title">title</div><div class="close">X</div><div class="content">fgdfgd</div></div></div>'
// });
flsModules.tippy = tippy('[data-tippy-content-nab]', {
	arrow: true,
	placement: 'right',
	allowHTML: true,
	content: '<div class="tippy__wrapper"><div class="tippy__top"><div class="tippy__title">подсказка</div><div class="tippy__close"></div><div class="tippy__content">Набор - это совокупность нескольких товаров одного и того же аромата, упакованных в подарочную коробку. Как правило, производители объединяют в набор парфюмерию и различного рода средства для ухода за телом (гели, лосьоны, дезодоранты, прочие). Считается, что одновременное использование нескольких средств позволяет добиться более стойкого аромата после их применения</div></div></div>'
});

flsModules.tippy = tippy('[data-tippy-content-testers]', {
	arrow: true,
	placement: 'right',
	allowHTML: true,
	content: '<div class="tippy__wrapper"><div class="tippy__top"><div class="tippy__title">подсказка</div><div class="tippy__close"></div><div class="tippy__content">Тестер - это демонстрационный образец, отличительной особенностью которого является упрощенная упаковка или ее отсутствие. С точки зрения содержимого флакона отличий от товара в обычной упаковке нет. С пометкой «тестер» также может продаваться товар, упаковка которого не соответствует подарочному виду (например, подмятый уголок коробки, надорванный или потертый целлофан). Флакон тестера иногда может не иметь дизайнерской крышки.</div></div></div>'
});