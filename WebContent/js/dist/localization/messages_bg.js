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
 * Locale: BG (Bulgarian; българ�?ки език)
 */
$.extend($.validator.messages, {
	required: "Полето е задължително.",
	remote: "Мол�?, въведете правилната �?тойно�?т.",
	email: "Мол�?, въведете валиден email.",
	url: "Мол�?, въведете валидно URL.",
	date: "Мол�?, въведете валидна дата.",
	dateISO: "Мол�?, въведете валидна дата (ISO).",
	number: "Мол�?, въведете валиден номер.",
	digits: "Мол�?, въведете �?амо цифри.",
	creditcard: "Мол�?, въведете валиден номер на кредитна карта.",
	equalTo: "Мол�?, въведете �?ъщата �?тойно�?т отново.",
	extension: "Мол�?, въведете �?тойно�?т �? валидно разширение.",
	maxlength: $.validator.format("Мол�?, въведете повече от {0} �?имвола."),
	minlength: $.validator.format("Мол�?, въведете поне {0} �?имвола."),
	rangelength: $.validator.format("Мол�?, въведете �?тойно�?т �? дължина между {0} и {1} �?имвола."),
	range: $.validator.format("Мол�?, въведете �?тойно�?т между {0} и {1}."),
	max: $.validator.format("Мол�?, въведете �?тойно�?т по-малка или равна на {0}."),
	min: $.validator.format("Мол�?, въведете �?тойно�?т по-гол�?ма или равна на {0}.")
});

}));
