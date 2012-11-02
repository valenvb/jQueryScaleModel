(function($){
	var methods {
		init : function (options) {
			
			return this.each()
			//setup defaults
				var settings = $.extend({
					'page-content-div-id':'#body',
					'custom-model-id' : '',
					'speed' : '0.5',
					
				}, options)
				//if using the default, lets append it now.
						if (settings['use-custom-model']==='') {
							$('body').append('<div id="jsm-default-model" class="jsm-def-popup">  </div>');
							//otherwise, lets find your model template now.
						} else {
							  jsm-your-custom-model = $(settings[csutom-model-id]);
							 };
			
				};
		
		open : function  () {
		  		
		};
				
		close : function () {
		  
				};
		destroy : function (args) {
		  
		};
	};
	


	$.jsm = function (method){
		if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist!' );
    }    
    
	};
	
	
})(jQuery);







/*
bind keyCode === 27

var options = [
	page-content : "body",
	use-custom-model : false,
	cutom-model-id : '',
]

content = $(options[page-content]);
*/