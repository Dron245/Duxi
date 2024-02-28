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
flsModules.tippy = tippy('[data-tippy-content]', {
	arrow: true,
	placement: 'right',
	content: '<div class="wrapper"><div class="top"><div class="title">title</div><div class="close">X</div><div class="content">fgdfgd</div></div></div>'
});
flsModules.tippy = tippy('[data-tippy-content-mob]', {
	arrow: true,
	placement: 'right',
	allowHTML: true,
	content: '<div class="wrapper"><div class="top"><div class="title">title</div><div class="close">X</div><div class="content">fgdfgd</div></div></div>'
});