/**
 * In the email view, this will fetch the JSON data and HTML injections.
 */
angular.module('EmailApp')
.factory('EmailFactory', function EmailFactory ($q, $http, $routeParams) {
	 'use strict';
	var exports = {};

	exports.reply = function (message) {
		if (message) {
			//this is where the backend coding comes in. We dont have a back end hooked up yet. 
			alert('Message Sent!\n\nMessage: ' + message);
		}
	};

	exports.getMessage = function (params) {
		if ( params.id ) {
			var deferred = $q.defer();
			$http.get('json/message/' + params.id + '.json')
				.success(function (data) {
					deferred.resolve(data);
				})
					.error(function (data) {
				deferred.reject(data);
				});
			return deferred.promise;
		}
	};
	return exports;
});
