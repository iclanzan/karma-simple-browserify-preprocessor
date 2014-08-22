'use strict';

var browserify = require('browserify');

function preprocessor(logger) {
	var log = logger.create('preprocessor.browserify');
	return function(content, file, done) {
		log.debug('Browserifying file %s', file.path);
		browserify(file.path).bundle(function(err, browserifiedContent) {
			done(err, browserifiedContent && browserifiedContent.toString('utf-8') || null);
		});
	};
}

module.exports = {
  'preprocessor:browserify': ['factory', preprocessor]
};
