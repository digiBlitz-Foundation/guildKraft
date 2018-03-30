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
 * Locale: EL (Greek; ελληνικά)
 */
$.extend($.validator.messages, {
	required: "Αυτό το πεδίο είναι υποχ�?εωτικό.",
	remote: "Πα�?ακαλώ διο�?θώστε αυτό το πεδίο.",
	email: "Πα�?ακαλώ εισάγετε μια έγκυ�?η διε�?θυνση email.",
	url: "Πα�?ακαλώ εισάγετε ένα έγκυ�?ο URL.",
	date: "Πα�?ακαλώ εισάγετε μια έγκυ�?η ημε�?ομηνία.",
	dateISO: "Πα�?ακαλώ εισάγετε μια έγκυ�?η ημε�?ομηνία (ISO).",
	number: "Πα�?ακαλώ εισάγετε έναν έγκυ�?ο α�?ιθμό.",
	digits: "Πα�?ακαλώ εισάγετε μόνο α�?ιθμητικά ψηφία.",
	creditcard: "Πα�?ακαλώ εισάγετε έναν έγκυ�?ο α�?ιθμό πιστωτικής κά�?τας.",
	equalTo: "Πα�?ακαλώ εισάγετε την ίδια τιμή ξανά.",
	extension: "Πα�?ακαλώ εισάγετε μια τιμή με έγκυ�?η επέκταση α�?χείου.",
	maxlength: $.validator.format("Πα�?ακαλώ εισάγετε μέχ�?ι και {0} χα�?ακτή�?ες."),
	minlength: $.validator.format("Πα�?ακαλώ εισάγετε τουλάχιστον {0} χα�?ακτή�?ες."),
	rangelength: $.validator.format("Πα�?ακαλώ εισάγετε μια τιμή με μήκος μεταξ�? {0} και {1} χα�?ακτή�?ων."),
	range: $.validator.format("Πα�?ακαλώ εισάγετε μια τιμή μεταξ�? {0} και {1}."),
	max: $.validator.format("Πα�?ακαλώ εισάγετε μια τιμή μικ�?ότε�?η ή ίση του {0}."),
	min: $.validator.format("Πα�?ακαλώ εισάγετε μια τιμή μεγαλ�?τε�?η ή ίση του {0}.")
});

}));
