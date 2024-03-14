/* Календарь */

// Подключение функционала "Чертоги Фрилансера"
// подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		onSelect: instance => {
			// Show which date was selected.
			console.log(instance.dateSelected)
		 },
		 onShow: instance => {
			console.log('Calendar showing.')
		 },
		 onHide: instance => {
			console.log('Calendar hidden.')
		 },
		 onMonthChange: instance => {
			// Show the month of the selected date.
			console.log(instance.currentMonthName)
		 },
		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
		overlayButton: 'Применить',
		overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	flsModules.datepicker = picker;
}
