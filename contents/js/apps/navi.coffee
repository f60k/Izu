class window.NaviApp

	@isPopupOpen = false

	db : null
	currentBikeList : null

	checkboxViewList : null
	listView : null
	popupView : null

	constructor : () ->
		# SETUP DB
		@db = new DB()
		@db.setup()
		@currentBikeList = []
		# SETUP CHECKBOXES FOR FILTERING
		@checkboxViewList = []
		checkboxes = $('nav.filter-set li.list__item')
		for val in checkboxes
			view = new ButtonView($(val))
			# filterClassName = view.getFilterPrefix()
			@checkboxViewList.push view

		radio(HKPEvent.CheckboxViewClickEvent).subscribe (sender) =>
			# console.log 'radio.update'
			for view in @checkboxViewList
				view.setChecked(false)

			sender.setChecked(true)
			@update()

		radio(HKPEvent.ListItemViewClickEvent).subscribe (sender) =>
			bike = sender.bike
			# console.log bike
			# @createPopup(bike.name, bike.catalogueUrl, bike.rentalId)

		# SETUP LISTVIEW FOR RESULT
		@listView = new ListView($('.list_view'))
		@listView.init(@db.bikes)

		# @popupView = new PopupView($('.global_popup_view'))

		@update()

	update : () ->

		firstList = @currentBikeList

		@currentBikeList = currentBikeList = @getAllFilterResult(@db.bikes,
			@getCheckboxView('A').isChecked(),
			@getCheckboxView('L').isChecked(),
			@getCheckboxView('C').isChecked(),
			@getCheckboxView('E').isChecked(),
			@getCheckboxView('S').isChecked())

		console.log 'A', @getCheckboxView('A').isChecked()
		console.log 'L', @getCheckboxView('L').isChecked()
		console.log 'C', @getCheckboxView('C').isChecked()
		console.log 'E', @getCheckboxView('E').isChecked()
		console.log 'S', @getCheckboxView('S').isChecked()


		# for checkboxView in @checkboxViewList
		# 	# filterClassName = checkboxView.getFilterPrefix() + 'Filter'
		# 	# count = @getSingleFilterResult(@currentBikeList, filterClassName, true).length
		# 	count = 999
		# 	checkboxView.update(new CheckboxViewData(count))

		# console.log 'app.update'
		console.log @currentBikeList

		actionType = null
		# if firstList.length < 1
		# 	actionType = ListViewActionType.Init
		# 	diff = @currentBikeList
		# else
			# if currentBikeList.length < firstList.length
			# 	actionType = ListViewActionType.Remove
			# 	diff = firstList.filter (item) -> currentBikeList.indexOf(item) == -1
			# else
			# 	actionType = ListViewActionType.Add
			# 	diff = currentBikeList.filter (item) -> firstList.indexOf(item) == -1
			# 	console.log 'diff' + diff
		actionType = ListViewActionType.Change
		diff = null

		@listView.update(new ListViewData(actionType, firstList, currentBikeList, diff))

	# createPopup : (name, catalogueUrl, rentalId) ->
	# 	rentalUrl = 'https://hondago-bikerental.jp/vehicle/detail/' + rentalId
	# 	if rentalId == 99999
	# 		rentalUrl = "https://hondago-bikerental.jp/vehicle/list"
	# 	@popupView.show(name, catalogueUrl, rentalUrl)


	getCheckboxView : (filterPrefix) ->
		for view in @checkboxViewList
			if view.hasFilterPrefix(filterPrefix)
				return view
		return null

	getAllFilterResult : (bikes, utrFlg=false, aclFlg=false, mtrFlg=false, cmbFlg=false, absFlg=false) ->
		filter = new BikeFilter(bikes)

		# filter = new ESPFilter(filter, espFlg)
		# filter = new HEVFilter(filter, hevFlg)
		# filter = new ISSFilter(filter, issFlg)

		filter = new AFilter(filter, utrFlg)
		filter = new LFilter(filter, aclFlg)
		filter = new CFilter(filter, mtrFlg)
		filter = new EFilter(filter, cmbFlg)
		filter = new SFilter(filter, absFlg)

		# filter = new SHKFilter(filter, shkFlg)
		# filter = new HSKFilter(filter, hskFlg)

		# filter = new LBXFilter(filter, lbxFlg)
		# filter = new FSSFilter(filter, fssFlg)
		# filter = new ASCFilter(filter, ascFlg)

		filter.getResult()

	getSingleFilterResult : (bikes, FilterClass, flg=false) ->
		filter = new BikeFilter(bikes)
		filter = new window[FilterClass](filter, flg)

		filter.getResult()
