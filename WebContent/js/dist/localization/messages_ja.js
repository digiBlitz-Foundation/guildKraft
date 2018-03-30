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
 * Locale: JA (Japanese; 日本語)
 */
$.extend($.validator.messages, {
	required: "�?��?�フィールド�?�必須�?��?�。",
	remote: "�?��?�フィールドを修正�?��?��??�?��?��?�。",
	email: "有効�?�Eメールアドレスを入力�?��?��??�?��?��?�。",
	url: "有効�?�URLを入力�?��?��??�?��?��?�。",
	date: "有効�?�日付を入力�?��?��??�?��?��?�。",
	dateISO: "有効�?�日付（ISO）を入力�?��?��??�?��?��?�。",
	number: "有効�?�数字を入力�?��?��??�?��?��?�。",
	digits: "数字�?��?�を入力�?��?��??�?��?��?�。",
	creditcard: "有効�?�クレジットカード番�?�を入力�?��?��??�?��?��?�。",
	equalTo: "�?��?�値をも�?�一度入力�?��?��??�?��?��?�。",
	extension: "有効�?�拡張�?を�?�む値を入力�?��?��??�?��?��?�。",
	maxlength: $.validator.format("{0} 文字以内�?�入力�?��?��??�?��?��?�。"),
	minlength: $.validator.format("{0} 文字以上�?�入力�?��?��??�?��?��?�。"),
	rangelength: $.validator.format("{0} 文字�?�ら {1} 文字�?��?��?�値を入力�?��?��??�?��?��?�。"),
	range: $.validator.format("{0} �?�ら {1} �?��?��?�値を入力�?��?��??�?��?��?�。"),
	max: $.validator.format("{0} 以下�?�値を入力�?��?��??�?��?��?�。"),
	min: $.validator.format("{0} 以上�?�値を入力�?��?��??�?��?��?�。")
});

}));
