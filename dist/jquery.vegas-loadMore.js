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
			
			var btnText = $self.text();
			
			params = {
				limit: limit,
				offset: offset
			};
			
			options.onClick.call(this, $self);
			
			$.get(route, params, function (data) {
				offset = first_offset + offset;
				
				options.onLoad.call(this, $self, data);
				$self.text(btnText);
			});
			
			return false;
		});
		
		return $self;
	};
})(jQuery);