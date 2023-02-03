

$ ->

	$(".events").click ->
		location.href = '/contents/?jump=3'

	$('.sns').click ->
		location.href = '/contents/?jump=4'



	$('.item').attr(  'transition-style', "in:wipe:right")

	$('article > h2').attr(  'transition-style', "in:wipe:right")
	$('aside > h2').attr(  'transition-style', "in:wipe:right")
	$('.hero .logo img').attr(  'transition-style', "in:wipe:right")
	$('.hero .lead').attr(  'transition-style', "in:wipe:right")
	$('.news').attr(  'transition-style', "in:wipe:right")
