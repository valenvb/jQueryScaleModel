/* jsm.js -- jQueryScaleModel
 * 
 * jQuery implementation of Avgrund (http://labs.hakim.se/avgrund)
 *
 * Better and much faster CSS3D Modal. Or at least it will be when done.
 *
 * Author: Valen Varangu Booth (http://github.com/valenvb)
 */

(function($) {
	var methods = {
		init : function (options) {
			var $this = $(this);
			
			// do your extend here
			options = $.extend({
				//
			}, options);
			
			// then do whatever you want for 'init'
			$this.addClass('jsm-popup');
			
			// setup stuff
			if ( $('div.jsm-cover').length === 0 )
				$( document.body )
					.append(
						$( document.createElement('div') )
							.addClass('jsm-cover')
					)

			if ( ! $('html:first').is('.jsm-ready') ) $('html:first').addClass('jsm-ready');
		},
		
		open : function  () {
			// useful
			var $this = $(this);
			
			// have events, make your life easier
			var evt = $.Event({
				type: 'jsm:open',
				elm: this
			});
			$this.trigger(evt);
			if ( evt.isDefaultPrevented() ) return;

			// open the popup
			$('html:first').addClass('jsm-active');
			$this.addClass('jsm-popup-animate');
			
			// add event listeners
			$(window).bind('keydown', methods[ 'ifClose' ]);
		},
		
		ifClose: function(evt) {
			evt.keyCode !== undefined && evt.keyCode === 27 && $( '.jsm-popup-animate' ).jsm( 'close' );
		},
		
		ifBlurClose: function() {
			$( '.jsm-popup-animate' ).jsm( 'close' );
		},
		
		close : function () {
			// remove event listener
			$(window).unbind('keydown', methods[ 'ifClose' ]);
			
			// same shit
			var $this = $(this);
			
			// have events, make your life easier
			var evt = $.Event({
				type: 'jsm:close',
				elm: this
			});
			$this.trigger(evt);
			if ( evt.isDefaultPrevented() ) return;
			
			// close the popup
			$('html:first').removeClass('jsm-active');
			$this.removeClass('jsm-popup-animate');
		},
		
		destroy : function () {
			// same shit
			var $this = $(this);
			
			// have events, make your life easier
			var evt = $.Event({
				type: 'jsm:destroy',
				elm: this
			});
			$this.trigger(evt);
			if ( evt.isDefaultPrevented() ) return;
			
			// destroy the popup; remove classes and stuff
			if ( $('div.jsm-cover').length !== 0 ) $('div.jsm-cover').remove();
			if ( $('html:first').is('.jsm-ready') ) $('html:first').removeClass('jsm-ready');
			
			$this.removeClass('jsm-popup');
		}
	};
	
	// aliases
	methods['show'] = methods['open'];
	

	// don't use $.jsm
	// it's better to go like this:
	$.fn.jsm = function( options ) {
		if ( typeof(options) === 'string' ) options = { method: options };
		
		if ( typeof(options) === "object" ) {
			options = $.extend({
				method: 'init'
			}, options);
			
			if ( methods[ options.method ] ) methods[ options.method ].apply( this, options );
			else $.error( '.jsm(\'' + options.method + '\'): action invalid.' );
		}
		
		// you don't need to return till the end
		return this;
	};
		
})( window.jQuery );

/*
bind keyCode === 27

var options = [
	page-content : "body",
	use-custom-model : false, // keep this as auto-detect
	cutom-model-id : '',
]

content = $(options[page-content]);
*/