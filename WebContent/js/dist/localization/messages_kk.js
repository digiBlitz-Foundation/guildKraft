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
 * Locale: KK (Kazakh; қазақ тілі)
 */
$.extend($.validator.messages, {
	required: "Бұл өрі�?ті міндетті түрде толтырыңыз.",
	remote: "Дұры�? мағына енгізуіңізді �?ұраймыз.",
	email: "�?ақты �?лектронды поштаңызды енгізуіңізді �?ұраймыз.",
	url: "�?ақты URL-ды енгізуіңізді �?ұраймыз.",
	date: "�?ақты URL-ды енгізуіңізді �?ұраймыз.",
	dateISO: "�?ақты ISO форматымен �?әйке�? дата�?ын енгізуіңізді �?ұраймыз.",
	number: "Күнді енгізуіңізді �?ұраймыз.",
	digits: "Тек қана �?андарды енгізуіңізді �?ұраймыз.",
	creditcard: "�?е�?ие карта�?ының нөмірін дұры�? енгізуіңізді �?ұраймыз.",
	equalTo: "О�?ы мәнді қайта енгізуіңізді �?ұраймыз.",
	extension: "Файлдың кеңейтуін дұры�? таңдаңыз.",
	maxlength: $.validator.format("Ұзындығы {0} �?имволдан көр болма�?ын."),
	minlength: $.validator.format("Ұзындығы {0} �?имволдан аз болма�?ын."),
	rangelength: $.validator.format("Ұзындығы {0}-{1} дейін мән енгізуіңізді �?ұраймыз."),
	range: $.validator.format("Пожалуй�?та, введите чи�?ло от {0} до {1}. - {0} - {1} �?анын енгізуіңізді �?ұраймыз."),
	max: $.validator.format("{0} аз неме�?е тең �?анын енгізуіңіді �?ұраймыз."),
	min: $.validator.format("{0} көп неме�?е тең �?анын енгізуіңізді �?ұраймыз.")
});

}));
