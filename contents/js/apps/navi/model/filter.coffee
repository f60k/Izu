class Filter
	filter : null
	constructor : (filter) ->
		@filter = filter

class window.BikeFilter extends Filter
	bikes : null
	constructor : (bikes) ->
		super(null)
		@bikes = bikes
	getResult : () ->
		return @bikes

class window.AFilter extends Filter
	condition : null
	constructor : (filter, condition) ->
		super(filter)
		@condition = Number(condition)

	getResult : () ->
		result = @filter.getResult()
		if @condition == 0
			return result
		bike \
		for bike in result \
			when ((bike.flgs & (1)) != 0)

class window.LFilter extends Filter
	condition : null
	constructor : (filter, condition) ->
		super(filter)
		@condition = Number(condition)

	getResult : () ->
		result = @filter.getResult()
		if @condition == 0
			return result
		bike \
		for bike in result \
			when ((bike.flgs & (2)) != 0)

class window.CFilter extends Filter
	condition : null
	constructor : (filter, condition) ->
		super(filter)
		@condition = Number(condition)

	getResult : () ->
		result = @filter.getResult()
		if @condition == 0
			return result
		bike \
		for bike in result \
			when ((bike.flgs & (2 << 1)) != 0)

class window.EFilter extends Filter
	condition : null
	constructor : (filter, condition) ->
		super(filter)
		@condition = Number(condition)

	getResult : () ->
		result = @filter.getResult()
		if @condition == 0
			return result
		bike \
		for bike in result \
			when ((bike.flgs & (2 << 2)) != 0)

class window.SFilter extends Filter
	condition : null
	constructor : (filter, condition) ->
		super(filter)
		@condition = Number(condition)

	getResult : () ->
		result = @filter.getResult()
		if @condition == 0
			return result
		bike \
		for bike in result \
			when ((bike.flgs & (2 << 3)) != 0)
