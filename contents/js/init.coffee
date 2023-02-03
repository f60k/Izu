

$ ->


	app = new NaviApp()

	$('.list__item').attr(  'transition-style', "in:wipe:right")
	$('.title-wrapper').attr(  'transition-style', "in:wipe:right")

	vars = UrlParams.getVars()
	if vars.jump != null
		index = Number(vars.jump)
		if index == 0
			$('.category-list .activity').click()
		else if index == 1
			$('.category-list .life').click()
		else if index == 2
			$('.category-list .culture').click()
		else if index == 3
			$('.category-list .event').click()
		else if index == 4
			$('.category-list .sns').click()


	# gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger)

	# gsap.set('.category-list .list__item', {marginLeft:100})
	# gsap.to('.category-list .list__item', {marginLeft:0, duration:2, delay:1, ease: "power2.out"})

	# ScrollTrigger.create({
	# 	trigger:$('.genraku-nav'),
	# 	start:'top',
	# 	end:'bottom+=3388',
	# 	markers:false,
	# 	pin:true,
	# 	pinSpacing:false,
	# 	})

	# tl = gsap.timeline({defaults:{duration:1.2, ease:"power4.out"}})
	# tl.from($('.title'), { x:0, y:60, opacity:0, duration:.6, delay:1, ease: "power2.out"})
	# .from($('.oyaji'), { x:0, y:60, opacity:0, duration:1.2, ease: "power2.out",delay:.6}, '<')
	# .from($('.intro span'), {
	# 	stagger:
	# 		{
	# 			from: "start",
	# 			amount: 1
	# 	}
	# 	x:50, y:0, opacity:0, duration:2.6, ease: "power2.out"})

	# gsap.timeline({
	# 	defaults: { ease: "power2.out", duration: 1 },
	# 	scrollTrigger: {
	# 	markers: true,
	# 	trigger: ".js-vol1",
	# 	start: "top 50%",
	# 	end: "bottom top",
	# 	},})
	# .from($('.js-vol1 .ribbon'), { scaleX:0, duration:.6})
	# .from($('.js-vol1 h1'), { x:20, y:0, opacity:0, duration:.6})
	# .from($('.js-vol1 h2'), { x:10, y:0, opacity:0, duration:.6})
	# .from($('.js-vol1 .movie'), { x:0, y:20, opacity:0, duration:.6})
	# .from($('.js-vol1 p span'), {
	# 	stagger:
	# 		{
	# 			from: "start",
	# 			amount: 1
	# 	}
	# 	x:0, y:50, opacity:0, duration:2.6, ease: "power2.out"})