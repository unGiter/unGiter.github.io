$(document).ready(function() {
	$.fn.fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
		afterLoad: function(anchorLink, index) {
						if(index == 4) {
							$('.section4').find('p').delay(500).animate({
								left: '0'
							}, 1500, 'easeOutExpo');
						}
						if(index == 5) {
							$('.section5').find('p').delay(500).animate({
								bottom: '0'
							}, 1500, 'easeOutExpo');
						}
						if(index == 6) {
						$('.section6').find('span').fadeIn(2000);
						}
					},
					onLeave: function(index, direction) {
						if(index == '4') {
							$('.section4').find('p').delay(500).animate({
								left: '-120%'
							}, 1500, 'easeOutExpo');
						}
						if(index == '5') {
							$('.section5').find('p').delay(500).animate({
								bottom: '-120%'
							}, 1500, 'easeOutExpo');
						}
						if(index == '6') {
							$('.section6').find('span').fadeOut(2000);
						}
					},
		navigation: true,
		loopBottom: true,
		menu: '#menu'
	});
});