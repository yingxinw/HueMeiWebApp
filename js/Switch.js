;
(function($) {
	jQuery.fn.extend({
		"FSwitch": function(str1,str1_1) {
			var i=0;
			str1.eq(0).fadeIn();
			str1_1.eq(0).addClass("active");
			setInterval(function() {
				if(i > str1.length-1) {
					i = 0;
				}
				str1.fadeOut();
				str1.eq(i).fadeIn();
				str1_1.removeClass("active");
				str1_1.eq(i).addClass("active");
				i++;
			}, 2000)
		}
	})
})(jQuery)