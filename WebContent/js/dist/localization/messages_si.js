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
 * Locale: SI (Slovenian)
 */
$.extend($.validator.messages, {
	required: "To polje je obvezno.",
	remote: "Vpis v tem polju ni v pravi obliki.",
	email: "Prosimo, vnesite pravi email naslov.",
	url: "Prosimo, vnesite pravi URL.",
	date: "Prosimo, vnesite pravi datum.",
	dateISO: "Prosimo, vnesite pravi datum (ISO).",
	number: "Prosimo, vnesite pravo številko.",
	digits: "Prosimo, vnesite samo številke.",
	creditcard: "Prosimo, vnesite pravo številko kreditne kartice.",
	equalTo: "Prosimo, ponovno vnesite enako vsebino.",
	extension: "Prosimo, vnesite vsebino z pravo kon�?nico.",
	maxlength: $.validator.format("Prosimo, da ne vnašate ve�? kot {0} znakov."),
	minlength: $.validator.format("Prosimo, vnesite vsaj {0} znakov."),
	rangelength: $.validator.format("Prosimo, vnesite od {0} do {1} znakov."),
	range: $.validator.format("Prosimo, vnesite vrednost med {0} in {1}."),
	max: $.validator.format("Prosimo, vnesite vrednost manjšo ali enako {0}."),
	min: $.validator.format("Prosimo, vnesite vrednost ve�?jo ali enako {0}.")
});

}));
