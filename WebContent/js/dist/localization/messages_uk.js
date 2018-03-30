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
 * Locale: UK (Ukrainian; україн�?ька мова)
 */
$.extend($.validator.messages, {
	required: "Це поле необхідно заповнити.",
	remote: "Будь ла�?ка, введіть правильне значенн�?.",
	email: "Будь ла�?ка, введіть коректну адре�?у електронної пошти.",
	url: "Будь ла�?ка, введіть коректний URL.",
	date: "Будь ла�?ка, введіть коректну дату.",
	dateISO: "Будь ла�?ка, введіть коректну дату у форматі ISO.",
	number: "Будь ла�?ка, введіть чи�?ло.",
	digits: "Вводите потрібно лише цифри.",
	creditcard: "Будь ла�?ка, введіть правильний номер кредитної карти.",
	equalTo: "Будь ла�?ка, введіть таке ж значенн�? ще раз.",
	extension: "Будь ла�?ка, виберіть файл з правильним розширенн�?м.",
	maxlength: $.validator.format("Будь ла�?ка, введіть не більше {0} �?имволів."),
	minlength: $.validator.format("Будь ла�?ка, введіть не менше {0} �?имволів."),
	rangelength: $.validator.format("Будь ла�?ка, введіть значенн�? довжиною від {0} до {1} �?имволів."),
	range: $.validator.format("Будь ла�?ка, введіть чи�?ло від {0} до {1}."),
	max: $.validator.format("Будь ла�?ка, введіть чи�?ло, менше або рівно {0}."),
	min: $.validator.format("Будь ла�?ка, введіть чи�?ло, більше або рівно {0}.")
});

}));
