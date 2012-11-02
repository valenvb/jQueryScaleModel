(function($){
	var methods {
		init : function (options) {
			
				var settings = $.extend({
					'page-content-div-id':'#body',
					'custom-model-is' : '',
					'speed' : '0.5',
					
				}, options)
			
			if (settings['use-custom-model']==='') {
				$('body').append('<div id="jsm-default-model" class="jsm-def-popup">  </div>');
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