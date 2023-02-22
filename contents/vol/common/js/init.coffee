pageActiveEvent = (anchorLink, index) ->
	if index == 1
		obj = $('.section').eq(index - 1)
		# console.log obj

		delay = 'anim-delay-1s'
		wipeDir = "in:wipe:right"
		# console.log obj
		obj.find('.lead').addClass(delay).css({'display':'block'}).attr('transition-style', wipeDir)
		obj.find('.title').addClass(delay).css({'display':'block'}).attr('transition-style', wipeDir)
		obj.find('img').addClass(delay).css({'display':'block'}).attr('transition-style', wipeDir)

		$('body').removeClass('is_blur')
		$('.back-to-top').css({display:'flex'})


indexLeaveEvent = (index, nextIndex, direction) ->
	leavingSection = this
	$(this).removeClass('is-done')

	console.log nextIndex


	if nextIndex >1
		$('.back-to-top').removeClass('back-to-top-outside')
	else
		$('.back-to-top').addClass('back-to-top-outside')


	if direction == 'down'
		obj = $('.section').eq(index)
		wipeDir = null
		r = obj.find('.transform-bg-right').length > 0
		l = obj.find('.transform-bg-left').length > 0

		if r
			wipeDir = "in:wipe:left"
			bg = '.transform-bg-right'
			delay = 'anim-delay-1s'
		else if l
			wipeDir = "in:wipe:right"
			bg = '.transform-bg-left'
			delay = 'anim-delay-1s'
		if !r and !l
			wipeDir = "in:wipe:right"
			delay = 'anim-delay-1s'
			obj.find('.bg-img').attr('transition-style', wipeDir)

		if bg
			obj.find(bg).attr('transition-style', wipeDir)
		title = obj.find('.contents .title')
		if title.hasClass('title-rect-naname')
			title.removeAttr('transition-style')
		else
			title.addClass(delay).attr('transition-style', wipeDir)
		obj.find('.article-intro .title').addClass(delay).attr('transition-style', wipeDir)
		obj.find('p').addClass(delay).attr('transition-style', wipeDir)
		obj.find('.lead').addClass(delay).attr('transition-style', wipeDir)
		obj.find('img').addClass(delay).attr('transition-style', wipeDir)
		obj.find('.service-list').addClass(delay).attr('transition-style', wipeDir)
		obj.find('.g-map').addClass(delay).attr('transition-style', wipeDir)
		obj.find('.link').addClass(delay).attr('transition-style', wipeDir)
		obj.find('footer *').removeAttr('transition-style')





$ ->

	$('body').addClass('is_blur')

	$('<div class="back-to-top back-to-top-outside"><span class="arrow material-symbols-outlined">expand_less</span></div>').appendTo($('body'))
	$('.back-to-top').click ->
		$.fn.fullpage.moveTo(1)

	$('#fullpage').fullpage({
		scrollOverflow: true,
		easingcss3: 'ease-in-out',
		navigation: true,
		dragAndMove: false,
		onLeave: indexLeaveEvent,
		afterLoad: pageActiveEvent,
		});


	nav = $('#fp-nav')
	$('<span class="arrow next material-symbols-outlined">keyboard_arrow_down</span>').appendTo(nav)
	$('<span class="arrow prev material-symbols-outlined">expand_less</span>').prependTo(nav)

	$('#fp-nav .prev').click ->
		$.fn.fullpage.moveSectionUp()

	$('#fp-nav .next').click ->
		$.fn.fullpage.moveSectionDown()


