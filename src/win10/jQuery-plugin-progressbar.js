;
(function ($) {
	$.fn.loading = function () {
		var DEFAULTS = {
			backgroundColor: '#7b7b7b',
			progressColor: '#177dcf',
			percent: 75,
			duration: 1000000
		};	
		
		$(this).each(function () {
			var $target  = $(this);

			var opts = {
			backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
			progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
			percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
			duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
			};
			// console.log(opts);
	

			$target.find('.background').css('background-color', opts.backgroundColor);
			$target.find('.left').css('background-color', opts.backgroundColor);
			$target.find('.rotate').css('background-color', opts.progressColor);
			$target.find('.right').css('background-color', opts.progressColor);
	
			var $rotate = $target.find('.rotate');
			setTimeout(function () {	
				$rotate.css({
					'transition': 'transform ' + opts.duration + 'ms linear',
					'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
				});
			},1);		

			if (opts.percent > 50) {
				var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
				$target.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				$target.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			} 
		});
	}
})(jQuery);