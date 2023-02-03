class window.ListViewData

	actionType : null
	firstList : null
	lastList : null
	diff : null

	constructor : (actionType, firstList, lastList, diff) ->
		@actionType = actionType
		@firstList = firstList
		@lastList = lastList
		@diff = diff
