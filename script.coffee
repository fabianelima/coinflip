###
	          COINFLIP
	----------------------------
	Desenvolvido em CoffeeScript

		Código: Fabiane Lima
###
$ ->
	coin = undefined
	ctrl = []

	coined = ->
		$('.coin').css { opacity: '1', height: '2em' }

		c = Math.floor((Math.random() * 2))
		if coin is undefined then coin = c

		if ctrl.length is 0 then ctrl.push coin

		else if ctrl.length is 1
			if coin is 0 then coin = 1
			else if coin is 1 then coin = 0
			ctrl.push coin

		else if ctrl.length is 2
			ctrl = []
			coin = undefined

		if coin is 0 then $('.coin').html('1<br/><small>real</small>')
		if coin is 1 then $('.coin').html('&#9787;')

	$(document).on 'click', '.start', -> coined()
