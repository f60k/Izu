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




# responsive = () ->
# 	w = $(window).width();
# 	if w <= 928
# 		$.fn.fullpage.setResponsive(true);
# 	else
# 		$.fn.fullpage.setResponsive(false);
indexLeaveEvent = (index, nextIndex, direction) ->
	leavingSection = this
	# console.log leavingSection
	$(this).removeClass('is-done')

	# console.log direction, index
	# if index > 0
	# console.log index
	# if (matchMedia('only screen and (max-width: 928px)').matches)
	# 	return;


	if direction == 'down'
		# $('.section').eq(index-1).removeClass('move-down').addClass('move-up')
		obj = $('.section').eq(index)

		if obj.find('div.transform-bg').length < 1

			if obj.find('.bg01').length > 0
				obj.find('.contents .title').addClass('anim-delay-1s')
				obj.find('p').addClass('anim-delay-1s')
				obj.find('img').addClass('anim-delay-1s')

			obj.find('div.transform-bg').attr(  'transition-style', "in:wipe:right")
			obj.find('.bg01').attr(  'transition-style', "in:wipe:right")
			obj.find('.contents .title').attr(  'transition-style', "in:wipe:right")
			obj.find('p').attr(  'transition-style', "in:wipe:right")
			obj.find('img').attr(  'transition-style', "in:wipe:right")
		else


			if !obj.find('div.transform-bg').hasClass('transform-bg-opposite')
				obj.find('div.transform-bg').attr(  'transition-style', "in:wipe:left")
				obj.find('.bg01').attr(  'transition-style', "in:wipe:left")
				# obj.find('.contents .title').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")
				obj.find('.info').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")
				obj.find('p').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")
				obj.find('img').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")

				if obj.find('.contents .title').hasClass('title-rect-naname')
					# obj.find('.contents .title').removeAttr(  'transition-style')
					obj.find('.contents .anime-wrapper').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")
				else
					obj.find('.contents .title').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:left")
			else
				obj.find('div.transform-bg').attr(  'transition-style', "in:wipe:right")
				obj.find('.bg01').attr(  'transition-style', "in:wipe:right")
				# obj.find('.contents .title').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")
				obj.find('.info').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")
				obj.find('p').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")
				obj.find('img').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")

				if obj.find('.contents .title').hasClass('title-rect-naname')
					# obj.find('.contents .title').removeAttr(  'transition-style')
					obj.find('.contents .anime-wrapper').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")
				else
					obj.find('.contents .title').addClass('anim-delay-1s').attr(  'transition-style', "in:wipe:right")


		obj.find('.site *').removeAttr(  'transition-style')

		# else if direction == 'up'
		# 	$('.section').eq(index -1).removeClass('move-up').addClass('move-down')


$ ->
	# myFullpage = new fullpage('#fullpage', {
	$('#fullpage').fullpage({

		scrollOverflow: true,
		easingcss3: 'ease-in-out',
		navigation: true,
		dragAndMove: false,

		# onLeave: indexLeaveEvent,
		# responsiveWidth: 968,

		# afterLoad: (origin, destination, direction) ->
			# console.log destination
			# obj = $('#fullpage .section').eq(destination)
			# obj.find('.title').delay(2000).attr(  'transition-style', "in:wipe:right")
			# obj.find('img').delay(2000).attr(  'transition-style', "in:wipe:right")
			# obj.find('p').delay(2000).attr(  'transition-style', "in:wipe:right")
		# ,
		# afterSlideLoad: (section, origin, destination, direction) ->
		# 	console.log section

		});

	# $('.section .title').attr(  'transition-style', "in:wipe:right")
	# $('.title-wrapper').attr(  'transition-style', "in:wipe:right")


	# $(window).on('load resize', ->
	# 	responsive();
	# 	);