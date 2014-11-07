'use strict';

var jsonLogReporter = function( config ) {

	var path = config['outputPath'] ? config['outputPath'] : '';
	var currentTime = new Date().getTime();

	this.onBrowserLog = function( browser, log, type ) {

		if ( log === undefined || typeof log !== 'string' ) {
			return;
		}

		try {
			if ( log.substring( 0, 1 ) === '\'' ) {
				log = log.substring( 1, log.length - 1 );
			}
			log = JSON.parse( log );
		} catch ( e ) {
			return;
		}

		var key = ( log.key !== undefined ) ? log.key : 'logFile_' + currentTime;

		var message = ( log.message !== undefined ) ? log.message : log;

		var fs = require( 'fs' );

		var existingMessage = fs.readFileSync(
				path + key + ".json",
				{ "flag": "a+"}
			);

		if ( existingMessage && existingMessage.length !== 0 ) {
			try {

				existingMessage = JSON.parse( existingMessage.toString() );

				var objectMerge = require( 'object-merge' );

				message = objectMerge( existingMessage, message );

			} catch (e) {
				return;
			}
		}

		fs.writeFileSync(
				path + key + ".json",
				JSON.stringify( message, null, " " )
			);

	};

};

jsonLogReporter.$inject = ['config.jsonLogReporter'];

module.exports = {
	'reporter:json-log' : ['type', jsonLogReporter]
};
