class window.ButtonView extends View

	constructor : (tag, checked = false) ->
		super(tag)
		tag.click (e) =>
			console.log '1',e.target
			console.log '2',@tag

			radio(HKPEvent.CheckboxViewClickEvent).broadcast(this)


	setChecked : (flg) ->
		if flg
			@tag.addClass('selected')
		else
			@tag.removeClass('selected')

	isChecked : () ->
		@tag.hasClass('selected')

	update : (data) ->
	# 	if data instanceof CheckboxViewData
	# 		count = data.count
	# 		@updateCountDisplay(count)
	# 		@setEnabled(count > 0)

	hasFilterPrefix : (filterPrefix) ->
		return @tag.attr('data-filter-prefix') == filterPrefix

	getFilterPrefix : () ->
		name = @tag.attr('data-filter-prefix')
		# console.log name
		return name
		# console.log cb

	setEnabled : (state = false) ->
	# 	if state
	# 		@tag.find('label').removeClass('disabled')
	# 	else
	# 		@tag.find('label').addClass('disabled')

	updateCountDisplay : (count = 999) ->
		# @tag.find('span.count_display').html('('+count+')')