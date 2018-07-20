'use strict';

var jsonLogReporter = function( config ) {

	var path = config['outputPath'] ? config['outputPath'] : '';
	var overwrite = config['overWrite'] ? true : false;
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

		var name = ( log.name !== undefined ) ? log.name : 'logFile_' + currentTime;

		var object = ( log.object !== undefined ) ? log.object : log;

		var fs = require( 'fs' );

		if ( !overwrite ) {
			var existingObject = fs.readFileSync(
					path + name + ".json",
					{ "flag": "a+"}
				);

			if ( existingObject && existingObject.length !== 0 ) {
				try {

					existingObject = JSON.parse( existingObject.toString() );

					var objectMerge = require( 'object-merge' );

					object = objectMerge( existingObject, object );

				} catch (e) {
					return;
				}
			}
		}

		fs.writeFileSync(
				path + name + ".json",
				JSON.stringify( object, null, " " )
			);

	};

};

jsonLogReporter.$inject = ['config.jsonLogReporter'];

module.exports = {
	'reporter:json-log' : ['type', jsonLogReporter]
};
