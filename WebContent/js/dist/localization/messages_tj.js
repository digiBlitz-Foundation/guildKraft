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
 * Locale: TJ (Tajikistan; Забони тоҷикӣ)
 */
$.extend($.validator.messages, {
	required: "Ворид кардани ин филд маҷбури а�?т.",
	remote: "Илтимо�?, маълумоти �?аҳеҳ ворид кунед.",
	email: "Илтимо�?, почтаи �?лектронии �?аҳеҳ ворид кунед.",
	url: "Илтимо�?, URL адре�?и �?аҳеҳ ворид кунед.",
	date: "Илтимо�?, таърихи �?аҳеҳ ворид кунед.",
	dateISO: "Илтимо�?, таърихи �?аҳеҳи (ISO)ӣ ворид кунед.",
	number: "Илтимо�?, рақамҳои �?аҳеҳ ворид кунед.",
	digits: "Илтимо�?, танҳо рақам ворид кунед.",
	creditcard: "Илтимо�?, кредит карди �?аҳеҳ ворид кунед.",
	equalTo: "Илтимо�?, миқдори баробар ворид кунед.",
	extension: "Илтимо�?, қофи�?и файлро дуру�?т интихоб кунед",
	maxlength: $.validator.format("Илтимо�?, бештар аз {0} рамз ворид накунед."),
	minlength: $.validator.format("Илтимо�?, камтар аз {0} рамз ворид накунед."),
	rangelength: $.validator.format("Илтимо�?, камтар аз {0} ва зиёда аз {1} рамз ворид кунед."),
	range: $.validator.format("Илтимо�?, аз {0} то {1} рақам зиёд ворид кунед."),
	max: $.validator.format("Илтимо�?, бештар аз {0} рақам ворид накунед."),
	min: $.validator.format("Илтимо�?, камтар аз {0} рақам ворид накунед.")
});

}));
