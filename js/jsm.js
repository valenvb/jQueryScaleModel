(function($){
	var methods = {
		init: function(options){
			
				opt = $.extend({
				model: '#model',
				customModelContent: '.model-content',
				content: 'Make sure you pass me some content!',
				closeOnESC: true,
				closeOnCoverClick: true
			},options);
			
			if (opt.model != '#model' && opt.customModelContent != '.model-content') {
				jsmModel = $(opt.model);
				jsmContentHolder = $(opt.customModelContent);
			} else {
				$('body').append('<div id="jsm-model" class="jsm-popup"><span class="model-content"></span></div>');
				jsmModel = $('div#jsm-model');
				jsmContentHolder = $('.model-content')
			};
			
			if ( $('div.jsm-cover').length === 0 )
				$( document.body )
					.append(
						$( document.createElement('div') )
							.addClass('jsm-cover')
					)

			if ( ! $('html:first').is('.jsm-ready') ) 
			{ $('html:first').addClass('jsm-ready');}
			
			jsmInitCalled = true;
		},
		
		open: function(content){
			
			var data = content;
			
			if ($(content).legnth!=0){
				var content = $(content).html();
			};
			
			jsmContentHolder.html(data);
		
			$('html:first').addClass('jsm-active');
			jsmModel.addClass('jsm-popup-animate');
			
			
		/* add event listeners*/
			if (opt.closeOnCoverClick === true) {
			$('div.jsm-cover').on('click',function(){$.jsm('close')})
			};
			
			if (opt.closeOnESC === true){
			$(window).bind('keydown', methods[ 'ifClose' ]);
			};
			
		},
		
		ifClose: function(evt) {
			evt.keyCode !== undefined && evt.keyCode === 27 && $.jsm( 'close' );
		},
					
		close: function(){
			$(window).unbind('keydown', methods[ 'ifClose' ]);
			$('html:first').removeClass('jsm-active');
			jsmModel.removeClass('jsm-popup-animate');
			
		},
		
		destroy: function (){
		  
		}
	};
	
$.jsm = function(options, content){
	
	if(typeof (jsmInitCalled) != 'undefined' && options !=='close') { methods['open'].call(this, options)} else {
	
	if ( typeof(options) === 'string' ) options = { method: options };
		
		if ( typeof(options) === "object" ) {
			opt = $.extend({
				method: 'init',
			}, options);
			
			
			if ( methods[ opt.method ] ) methods[ opt.method ].apply( this, options );
			else $.error( '.jsm(\'' + options.method + '\'): action invalid.' );
		}
	};
};
	
})(jQuery);
