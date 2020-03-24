/**
 * Created by Vegas Studio
 */

(function( $ ) {
	"use strict";
	
	$.fn.vegasLoadMore = function(options) {
		
		options = $.extend({
			onClick: function() {},
			onLoad: function() {},
		}, arguments[0] || {});
		
		var $self = this;
		var first_offset = options.offset || parseInt($self.attr('data-offset')) || 50;
		
		// Options
		var offset = options.offset || parseInt($self.attr('data-offset')) || 50,
			limit = options.limit || parseInt($self.attr('data-limit'))|| 50,
			route = options.route || $self.attr('data-route') || null,
			params = options.params || null;
		
		$self.on('click', function () {
			if(route === null) return alert('Main parameters for loading are not specified');
			
			params.limit = limit;
			params.offset = offset;
			
			options.onClick.call(this, $self);
			
			$.post(route, params, function (data) {
				offset = first_offset + offset;
				
				options.onLoad.call(this, $self, data);
			});
			
			return false;
		});
		
		return $self;
	};
})(jQuery);