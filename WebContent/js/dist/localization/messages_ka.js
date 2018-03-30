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
 * Locale: KA (Georgian; ქ�?რთული)
 */
$.extend($.validator.messages, {
	required: "�?მ ველის შევსებ�? �?უცილებელი�?.",
	remote: "გთხ�?ვთ მიუთით�?თ სწ�?რი მნიშვნელ�?ბ�?.",
	email: "გთხ�?ვთ მიუთით�?თ ელ-ფ�?სტის კ�?რექტული მის�?მ�?რთი.",
	url: "გთხ�?ვთ მიუთით�?თ კ�?რექტული URL.",
	date: "გთხ�?ვთ მიუთით�?თ კ�?რექტული თ�?რიღი.",
	dateISO: "გთხ�?ვთ მიუთით�?თ კ�?რექტული თ�?რიღი ISO ფ�?რმ�?ტში.",
	number: "გთხ�?ვთ მიუთით�?თ ციფრი.",
	digits: "გთხ�?ვთ მიუთით�?თ მხ�?ლ�?დ ციფრები.",
	creditcard: "გთხ�?ვთ მიუთით�?თ ს�?კრედიტ�? ბ�?რ�?თის კ�?რექტული ნ�?მერი.",
	equalTo: "გთხ�?ვთ მიუთით�?თ �?სეთივე მნიშვნელ�?ბ�? კიდევ ერთხელ.",
	extension: "გთხ�?ვთ �?ირჩი�?თ ფ�?ილი კ�?რექტული გ�?ფ�?რთ�?ებით.",
	maxlength: $.validator.format("დ�?ს�?შვები�? �?რ�?უმეტეს {0} სიმბ�?ლ�?."),
	minlength: $.validator.format("�?უცილებელი�? შეიყვ�?ნ�?თ მინიმუმ {0} სიმბ�?ლ�?."),
	rangelength: $.validator.format("ტექსტში სიმბ�?ლ�?ების რ�?�?დენ�?ბ�? უნდ�? იყ�?ს {0}-დ�?ნ {1}-მდე."),
	range: $.validator.format("გთხ�?ვთ შეიყვ�?ნ�?თ ციფრი {0}-დ�?ნ {1}-მდე."),
	max: $.validator.format("გთხ�?ვთ შეიყვ�?ნ�?თ ციფრი რ�?მელიც ნ�?კლები�? �?ნ უდრის {0}-ს."),
	min: $.validator.format("გთხ�?ვთ შეიყვ�?ნ�?თ ციფრი რ�?მელიც მეტი�? �?ნ უდრის {0}-ს.")
});

}));
