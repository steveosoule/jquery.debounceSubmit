// ---- $.fn.debounceSubmit - Prevent multiple form submits ---- //
(function($){
	$.debounceSubmit = function(el, options){
		var self = this;
		self.$el = $(el);
		self.el = el;

		self.$el.data("debounceSubmit", self);

		self.timeoutId = 0;

		self.init = function(){
			self.options = $.extend({}, $.debounceSubmit.defaultOptions, options);

			self.$el.on('submit', self.submitHandler );

			$(document).on('keydown', function(e){
				if( e.which === 27 ){
					// Enable form submit after Esc key is pressed
					self.$el.data('is-submitting', false);
				}
			})
		};

		self.submitHandler = function(e){
			var $form = $(this);
			clearTimeout(self.timeoutId);
			if( $form.data('is-submitting') ){
				if( self.options.debug ) console.log('Prevent Submit');
				e.preventDefault();
				return false;
			}
			if( self.options.debug ) console.log('Allow Submit');
			$form.data('is-submitting', true);
			self.timeoutId = setTimeout(function(){
				if( self.options.debug ) console.log('Enable Submit');
				$form.data('is-submitting', false);
			}, self.options.wait);
		};

		self.init();
	};

	$.debounceSubmit.defaultOptions = {
		wait: 750,
		debug: false
	};

	$.fn.debounceSubmit = function(options){
		return this.each(function(){
			(new $.debounceSubmit(this, options));
		});
	};

})(jQuery);