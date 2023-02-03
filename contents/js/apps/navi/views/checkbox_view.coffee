class window.CheckboxView extends View

	constructor : (tag, checked = false) ->
		super(tag)
		tag.click (e) =>
			console.log '1',e.target
			console.log '2',@tag
			if e.target.closest('label') or e.target.closest('span')
				return
			radio(HKPEvent.CheckboxViewClickEvent).broadcast(this)

	isChecked : () ->
		@tag.find('input.checkbox').prop('checked')

	update : (data) ->
		if data instanceof CheckboxViewData
			count = data.count
			@updateCountDisplay(count)
			@setEnabled(count > 0)

	hasFilterPrefix : (filterPrefix) ->
		return @tag.find('input.checkbox').attr('data-filter-prefix') == filterPrefix

	getFilterPrefix : () ->
		@tag.find('input.checkbox').attr('data-filter-prefix')
		# console.log cb

	setEnabled : (state = false) ->
		if state
			@tag.find('label').removeClass('disabled')
		else
			@tag.find('label').addClass('disabled')

	updateCountDisplay : (count = 999) ->
		# @tag.find('span.count_display').html('('+count+')')