class window.ListItemView extends View

	@SwitchWidth = 968
	@PcItemWidth = 23
	@PcItemHeight = 30
	@PcWrapCount = 3
	@SpItemWidth = 90
	@SpItemHeight = 135
	@SpWrapCount = 1

	firstPos : null
	index : null
	bike : null

	constructor : (tag, index) ->
		super(tag)
		@index = index
		@bike = null

		tag.mouseover (e) =>
			if NaviApp.isPopupOpen
				return
			@tag.addClass('zoom')
			# @tag.find('.marquee_text').addClass('start_anim')

		tag.mouseout (e) =>
			if NaviApp.isPopupOpen
				return
			@tag.removeClass('zoom')
			# @tag.find('.marquee_text').removeClass('start_anim')

		tag.click (e) =>
			if NaviApp.isPopupOpen
				return
			@tag.removeClass('zoom')
			# @tag.find('.marquee_text').removeClass('start_anim')
			radio(HKPEvent.ListItemViewClickEvent).broadcast(this)
			NaviApp.isPopupOpen = true

		$(window).resize =>
			@onResize()

		@onResize()

	onResize : () ->
		@culcPos()

	init : (bike) ->
		imagePath = 'images/navi/' + bike.id + '.png'
		# @tag.html('<div class="img-wrap"><img src="' + imagePath + '"></div><div class="marquee_wrap"><p class="marquee_text">' + bike.name + '</p></div>')
		@bike = bike

	culcPos : () ->

		switchWidth = ListItemView.SwitchWidth
		pcItemWidth = ListItemView.PcItemWidth
		pcItemHeight = ListItemView.PcItemHeight
		pcWrapCount = ListItemView.PcWrapCount
		spItemWidth = ListItemView.SpItemWidth
		spItemHeight = ListItemView.SpItemHeight
		spWrapCount = ListItemView.SpWrapCount


		if document.body.clientWidth >= switchWidth
			x = @index % pcWrapCount * pcItemWidth + 'vw'
			y = Math.floor(@index / pcWrapCount) * pcItemHeight + 'vw'

			if document.body.clientWidth >= 1920

				x = @index % pcWrapCount * 440
				y = Math.floor(@index / pcWrapCount) * 592



		else
			x = @index % spWrapCount * spItemWidth + 'vw'
			y = Math.floor(@index / spWrapCount) * spItemHeight + 'vw'
		@tag.css({left:x, top:y})
		@firstPos = {x:x, y:y}

	remove : () ->
		# console.log 'removed'
		@tag.addClass('remove')

	moveTo : (index) ->
		@index = index
		@culcPos()

	add : () ->
		# console.log 'added'
		@tag.removeClass('remove')