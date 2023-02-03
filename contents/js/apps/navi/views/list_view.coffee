class window.ListView extends View

	@pcMarginBottom = 0
	@spMarginBottom = 0

	listItemViewList : null
	currentListItemCount : null

	constructor : (tag) ->
		super(tag)

		@listItemViewList = []
		@currentListItemCount = 0

		tag.find('li').each (index, elem) =>
			view = new ListItemView($(elem), index)
			@listItemViewList.push view

		$(window).resize =>
			@onResize()

	onResize : () ->

		switchWidth = ListItemView.SwitchWidth
		pcItemHeight = ListItemView.PcItemHeight
		pcWrapCount = ListItemView.PcWrapCount
		spItemHeight = ListItemView.SpItemHeight
		spWrapCount = ListItemView.SpWrapCount

		if document.body.clientWidth >= switchWidth
			marginBottom = ListView.pcMarginBottom
			height = (pcItemHeight * Math.ceil(@currentListItemCount / pcWrapCount) + marginBottom) + 'vw'

			if document.body.clientWidth >= 1920

				height = (592 * Math.ceil(@currentListItemCount / pcWrapCount) + marginBottom)

		else
			marginBottom = ListView.spMarginBottom
			height = (spItemHeight * Math.ceil(@currentListItemCount / spWrapCount) + marginBottom) + 'vw'

		@tag.css({height:height})

	init : (bikes) ->
		for view, index in @listItemViewList
			view.init(bikes[index])
		@currentListItemCount = bikes.length
		@onResize()

	update : (data) ->
		if data instanceof ListViewData


			if data.firstList.length < 1 and data.lastList.length < 1
				return

			if data.actionType == ListViewActionType.Init
				return
			else if data.actionType == ListViewActionType.Change
				lastList = data.lastList
				firstList = data.firstList
				for view in @listItemViewList
					if firstList.indexOf(view.bike) != -1 and lastList.indexOf(view.bike) == -1
						view.remove()
					else if firstList.indexOf(view.bike) == -1 and lastList.indexOf(view.bike) != -1
						view.add()
						newIndex = data.lastList.indexOf(view.bike)
						view.moveTo(newIndex)
					else if firstList.indexOf(view.bike) != -1 and lastList.indexOf(view.bike) != -1
						newIndex = data.lastList.indexOf(view.bike)
						view.moveTo(newIndex)
			# else if data.actionType == ListViewActionType.Remove
			# 	for view in @listItemViewList
			# 		if data.diff.indexOf(view.bike) != -1
			# 			view.remove()
			# 		newIndex = data.lastList.indexOf(view.bike)
			# 		# console.log newIndex
			# 		if newIndex != -1
			# 			targetViewPos = @listItemViewList[newIndex].firstPos
			# 			view.moveTo(newIndex)
			# 			# console.log targetViewPos
			# else if data.actionType == ListViewActionType.Add
			# 	for view in @listItemViewList
			# 		if data.diff.indexOf(view.bike) != -1
			# 			view.add()
			# 		newIndex = data.lastList.indexOf(view.bike)
			# 		# console.log newIndex
			# 		if newIndex != -1
			# 			targetViewPos = @listItemViewList[newIndex].firstPos
			# 			view.moveTo(newIndex)
			# 			# console.log targetViewPos


		@currentListItemCount = data.lastList.length

		@onResize()

