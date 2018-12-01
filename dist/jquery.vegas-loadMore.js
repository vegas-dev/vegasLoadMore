/**
 * Created by Vegas s on 01.12.2018.
 */

(function( $ ) {
	"use strict";

	$.fn.vegasLoadMore = function(options) {

		options = $.extend({
			route: null,
			limit: 50,
			offset: 50,
			target: null,
			params: {}
		}, arguments[0] || {});

		var $self = this;
		var offset = options.offset;

		$self.on('click', function () {
			if(options.route === null || options.target === null) return alert('Main parameters for loading are not specified');

			var params = options.params;
			params.limit = options.limit;
			params.offset = offset;

			$.post(options.route, params, function (data) {
				offset = offset + options.offset;

				$(options.target).append(data.view); // Here is the generated view that is transferred from the server.
			});

			return false;
		});

		return $self;
	};
})(jQuery);