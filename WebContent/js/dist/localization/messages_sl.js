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
 * Language: SL (Slovenian; slovenski jezik)
 */
$.extend($.validator.messages, {
	required: "To polje je obvezno.",
	remote: "Prosimo popravite to polje.",
	email: "Prosimo vnesite veljaven email naslov.",
	url: "Prosimo vnesite veljaven URL naslov.",
	date: "Prosimo vnesite veljaven datum.",
	dateISO: "Prosimo vnesite veljaven ISO datum.",
	number: "Prosimo vnesite veljavno število.",
	digits: "Prosimo vnesite samo števila.",
	creditcard: "Prosimo vnesite veljavno številko kreditne kartice.",
	equalTo: "Prosimo ponovno vnesite vrednost.",
	extension: "Prosimo vnesite vrednost z veljavno kon�?nico.",
	maxlength: $.validator.format("Prosimo vnesite najve�? {0} znakov."),
	minlength: $.validator.format("Prosimo vnesite najmanj {0} znakov."),
	rangelength: $.validator.format("Prosimo vnesite najmanj {0} in najve�? {1} znakov."),
	range: $.validator.format("Prosimo vnesite vrednost med {0} in {1}."),
	max: $.validator.format("Prosimo vnesite vrednost manjše ali enako {0}."),
	min: $.validator.format("Prosimo vnesite vrednost ve�?je ali enako {0}.")
});

}));
