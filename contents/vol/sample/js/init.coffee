# $ ->
# 	# myFullpage = new fullpage('#fullpage', {
# 	$('#fullpage').fullpage({
# 		css3: true,
# 		easingcss3: 'ease-in-out',
# 		scrollingSpeed: 700,
# 		autoScrolling: true,
# 		fitToSection: false,
# 		navigation: true,
# 		navigationPosition: 'right',
# 		controlArrows: false,
# 		scrollOverflow: true,
# 		scrollBar: false,
# 		touchSensitivity: 5,
# 		# fixedElements: '#scroll_arrow',
# 		dragAndMove: false,
# 		# normalScrollElements: '#footer',
# 		responsiveWidth: 968,
# 		# responsiveHeight: 0,
# 		# responsiveSlides: false,
# 		# afterLoad: pageActiveEvent,
# 		# onLeave: indexLeaveEvent,
# 		# afterRender: pageLoadedEvent,
# 		# afterResize: pageResizeEvent,
# 		});



$ ->
	# myFullpage = new fullpage('#fullpage', {
	$('#fullpage').fullpage({

		scrollOverflow: true,
		easingcss3: 'ease-in-out',
		navigation: true,
		responsiveWidth: 928,

		afterLoad: (origin, destination, direction) ->
			# console.log destination
			# obj = $('#fullpage .section').eq(destination)
			# obj.find('.title').delay(2000).attr(  'transition-style', "in:wipe:right")
			# obj.find('img').delay(2000).attr(  'transition-style', "in:wipe:right")
			# obj.find('p').delay(2000).attr(  'transition-style', "in:wipe:right")
		,
		# afterSlideLoad: (section, origin, destination, direction) ->
		# 	console.log section

		});

	# $('.section .title').attr(  'transition-style', "in:wipe:right")
	# $('.title-wrapper').attr(  'transition-style', "in:wipe:right")