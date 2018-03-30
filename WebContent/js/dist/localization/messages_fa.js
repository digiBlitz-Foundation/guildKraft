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
 * Locale: FA (Persian; �?ارسی)
 */
$.extend($.validator.messages, {
	required: "تکمیل این �?یلد اجباری است.",
	remote: "لط�?ا این �?یلد را تصحیح کنید.",
	email: ".لط�?ا یک ایمیل صحیح وارد کنید",
	url: "لط�?ا آدرس صحیح وارد کنید.",
	date: "لط�?ا یک تاریخ صحیح وارد کنید",
	dateFA: "لط�?ا یک تاریخ صحیح وارد کنید",
	dateISO: "لط�?ا تاریخ صحیح وارد کنید (ISO).",
	number: "لط�?ا عدد صحیح وارد کنید.",
	digits: "لط�?ا تنها رقم وارد کنید",
	creditcard: "لط�?ا کریدیت کارت صحیح وارد کنید.",
	equalTo: "لط�?ا مقدار برابری وارد کنید",
	extension: "لط�?ا مقداری وارد کنید که ",
	maxlength: $.validator.format("لط�?ا بیشتر از {0} حر�? وارد نکنید."),
	minlength: $.validator.format("لط�?ا کمتر از {0} حر�? وارد نکنید."),
	rangelength: $.validator.format("لط�?ا مقداری بین {0} تا {1} حر�? وارد کنید."),
	range: $.validator.format("لط�?ا مقداری بین {0} تا {1} حر�? وارد کنید."),
	max: $.validator.format("لط�?ا مقداری کمتر از {0} حر�? وارد کنید."),
	min: $.validator.format("لط�?ا مقداری بیشتر از {0} حر�? وارد کنید."),
	minWords: $.validator.format("لط�?ا حداقل {0} کلمه وارد کنید."),
	maxWords: $.validator.format("لط�?ا حداکثر {0} کلمه وارد کنید.")
});

}));
