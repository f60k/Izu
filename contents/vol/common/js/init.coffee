
indexLeaveEvent = (index, nextIndex, direction) ->
	leavingSection = this
	$(this).removeClass('is-done')


$ ->


	$('#fullpage').fullpage({
		scrollOverflow: true,
		easingcss3: 'ease-in-out',
		navigation: true,
		dragAndMove: false,
		onLeave: indexLeaveEvent,
		});


	nav = $('#fp-nav')
	$('<span class="arrow next material-symbols-outlined">keyboard_arrow_down</span>').appendTo(nav)
	$('<span class="arrow prev material-symbols-outlined">expand_less</span>').prependTo(nav)

	$('#fp-nav .prev').click ->
		$.fn.fullpage.moveSectionUp()

	$('#fp-nav .next').click ->
		$.fn.fullpage.moveSectionDown()


