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
 * Locale: AR (Arabic; العربية)
 */
$.extend($.validator.messages, {
	required: "هذا الحقل إلزامي",
	remote: "يرجى تصحيح هذا الحقل للمتابعة",
	email: "رجاء إدخال عنوان بريد إلكتروني صحيح",
	url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
	date: "رجاء إدخال تاريخ صحيح",
	dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
	number: "رجاء إدخال عدد بطريقة صحيحة",
	digits: "رجاء إدخال أرقام �?قط",
	creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
	equalTo: "رجاء إدخال ن�?س القيمة",
	extension: "رجاء إدخال مل�? بامتداد موا�?ق عليه",
	maxlength: $.validator.format("الحد الأقصى لعدد الحرو�? هو {0}"),
	minlength: $.validator.format("الحد الأدنى لعدد الحرو�? هو {0}"),
	rangelength: $.validator.format("عدد الحرو�? يجب أن يكون بين {0} و {1}"),
	range: $.validator.format("رجاء إدخال عدد قيمته بين {0} و {1}"),
	max: $.validator.format("رجاء إدخال عدد أقل من أو يساوي (0}"),
	min: $.validator.format("رجاء إدخال عدد أكبر من أو يساوي (0}")
});

}));
