//
//Copyright: 2018 digiBlitz Foundation
//
//License: digiBlitz Public License 1.0 (DPL) 
//Administered by digiBlitz Foundation. www.digiblitz.org/dpl/
//
//Inventor: Suresh Kannan (Maya Suresh Kannan Balabisegan ) (www.sureshkannan.org)
//
//Authors: Suresh Kannan (Maya Suresh Kannan Balabisegan )& digiBlitz.
//
//"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software in accordance to the rules & restrictions of the digiBlitz Public License."
//
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; ру�?�?кий �?зык)
 */
$.extend($.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуй�?та, введите правильное значение.",
	email: "Пожалуй�?та, введите корректный адре�? �?лектронной почты.",
	url: "Пожалуй�?та, введите корректный URL.",
	date: "Пожалуй�?та, введите корректную дату.",
	dateISO: "Пожалуй�?та, введите корректную дату в формате ISO.",
	number: "Пожалуй�?та, введите чи�?ло.",
	digits: "Пожалуй�?та, вводите только цифры.",
	creditcard: "Пожалуй�?та, введите правильный номер кредитной карты.",
	equalTo: "Пожалуй�?та, введите такое же значение ещё раз.",
	extension: "Пожалуй�?та, выберите файл �? правильным ра�?ширением.",
	maxlength: $.validator.format("Пожалуй�?та, введите не больше {0} �?имволов."),
	minlength: $.validator.format("Пожалуй�?та, введите не меньше {0} �?имволов."),
	rangelength: $.validator.format("Пожалуй�?та, введите значение длиной от {0} до {1} �?имволов."),
	range: $.validator.format("Пожалуй�?та, введите чи�?ло от {0} до {1}."),
	max: $.validator.format("Пожалуй�?та, введите чи�?ло, меньшее или равное {0}."),
	min: $.validator.format("Пожалуй�?та, введите чи�?ло, большее или равное {0}.")
});

}));
